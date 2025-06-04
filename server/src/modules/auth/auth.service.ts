import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { generateOtp } from 'src/common/utils/generateOtp';
import {
  compareOtp,
  comparePassword,
  hashOtp,
  hashPassword,
} from 'src/common/utils/hash';
import { LoginUserDto } from 'src/modules/auth/dto/login-user.dto';
import { RegisterUserDto } from 'src/modules/auth/dto/register-user.dto';
import { VerifyOtpDto } from 'src/modules/auth/dto/verify-otp.dto';
import { MailService } from 'src/modules/mail/mail.service';
import { User } from 'src/modules/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const emailExist = await this.userRepository.findOne({
      where: { email: registerUserDto.email },
    });

    if (emailExist) {
      throw new HttpException('Email đã tồn tại', HttpStatus.BAD_REQUEST);
    }

    const phoneNumberExist = await this.userRepository.findOne({
      where: { phoneNumber: registerUserDto.phoneNumber },
    });

    if (phoneNumberExist) {
      throw new HttpException(
        'Số điện thoại này đã tồn tại',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordHash = hashPassword(registerUserDto.password);

    const otp = generateOtp();

    const otpHash = hashOtp(otp.otp);

    await this.mailService.sendMailToOtp(
      registerUserDto.email,
      'Mã xác thực OTP của bạn',
      `<p>Mã OTP của bạn là: <b>${otp.otp}</b></p> <p>Mã hết hạn sau 5 phút.</p>`,
    );

    const newUser = this.userRepository.create({
      fullName: registerUserDto.fullName,
      email: registerUserDto.email,
      phoneNumber: registerUserDto.phoneNumber,
      password: passwordHash,
      otp: otpHash,
      otpExpired: otp.otpExpire,
    });

    return await this.userRepository.save(newUser);
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{ message: string }> {
    const emailExist = await this.userRepository.findOne({
      where: { email: verifyOtpDto.email },
    });

    if (!emailExist) {
      throw new HttpException(
        'Email chưa tồn tại trong hệ thống',
        HttpStatus.BAD_REQUEST,
      );
    }

    const otpCompare = compareOtp(verifyOtpDto.otp, emailExist.otp);
    if (!otpCompare) {
      throw new HttpException(
        'Mã OTP không đúng, vui lòng nhập lại',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (emailExist.otpExpired.getTime() < Date.now()) {
      throw new HttpException(
        'Mã OTP này đã hết hạn, vui lòng chọn cấp lại mã OTP mới.',
        HttpStatus.BAD_REQUEST,
      );
    }

    emailExist.emailVerify = true;

    await this.userRepository.save(emailExist);
    return {
      message: 'Xác thực email thành công',
    };
  }

  async sendOtp(email: string): Promise<{ message: string }> {
    const emailExist = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!emailExist) {
      throw new HttpException(
        'Email này không tồn tại trong hệ thống',
        HttpStatus.BAD_REQUEST,
      );
    }
    const otp = generateOtp();

    const otpHash = hashOtp(otp.otp);

    await this.mailService.sendMailToOtp(
      email,
      'Mã xác thực OTP của bạn',
      `<p>Mã OTP của bạn là: <b>${otp.otp}</b></p> <p>Mã hết hạn sau 5 phút.</p>`,
    );

    emailExist.otp = otpHash;
    emailExist.otpExpired = new Date(otp.otpExpire);

    await this.userRepository.save(emailExist);
    return { message: 'OTP đã được gửi tới email của bạn' };
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<
    | {
        accessToken: string;
        refreshToken: string;
      }
    | {
        message: string;
      }
  > {
    const emailExist = await this.userRepository.findOne({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!emailExist) {
      throw new HttpException(
        'Email hoặc mật khẩu không đúng',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordCompare = comparePassword(
      loginUserDto.password,
      emailExist.password,
    );

    if (!passwordCompare) {
      throw new HttpException(
        'Email hoặc mật khẩu không đúng',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!emailExist.emailVerify) {
      await this.sendOtp(loginUserDto.email);
      return {
        message:
          'Tài khoản của bạn chưa xác thực email. Mã OTP đã được gửi tới email.',
      };
    } else {
      const token = this.generateToken({
        id: emailExist.id,
        email: emailExist.email,
        role: emailExist.role,
      });

      return token;
    }
  }

  async logoutUser(refreshToken: string) {
    const user = await this.userRepository.findOne({ where: { refreshToken } });
    if (!user) {
      throw new HttpException(
        'Không tìm thấy refresh token trong db',
        HttpStatus.BAD_REQUEST,
      );
    }

    user.refreshToken = null;

    await this.userRepository.save(user);
    return {
      message: 'Đăng xuất thành công',
    };
  }

  private async generateToken(payload: {
    id: string;
    email: string;
    role: string;
  }): Promise<{ accessToken: string; refreshToken: string }> {
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('EXP_IN_REFRESH_TOKEN'),
    });

    await this.userRepository.update(
      {
        email: payload.email,
      },
      { refreshToken: refreshToken },
    );

    return { accessToken, refreshToken };
  }
}
