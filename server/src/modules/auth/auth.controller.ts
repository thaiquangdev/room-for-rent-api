import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { AuthService } from 'src/modules/auth/auth.service';
import { LoginUserDto } from 'src/modules/auth/dto/login-user.dto';
import { RegisterUserDto } from 'src/modules/auth/dto/register-user.dto';
import { VerifyOtpDto } from 'src/modules/auth/dto/verify-otp.dto';
import { User } from 'src/modules/users/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return await this.authService.registerUser(registerUserDto);
  }

  @Post('/verify-otp')
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto): Promise<User> {
    return await this.authService.verifyOtp(verifyOtpDto);
  }

  @Post('/send-otp')
  async sendOtp(@Body('email') email: string): Promise<{
    message: string;
  }> {
    return await this.authService.sendOtp(email);
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<
    | {
        accessToken: string;
        refreshToken: string;
      }
    | {
        message: string;
      }
  > {
    return await this.authService.loginUser(loginUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('/logout/:refreshToken')
  async logout(@Param('refreshToken') refreshToken: string) {
    return await this.authService.logoutUser(refreshToken);
  }
}
