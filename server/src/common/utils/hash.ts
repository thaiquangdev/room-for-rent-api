import * as bcrypt from 'bcryptjs';

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const comparePassword = (passwordBody: string, passwordDb: string) => {
  return bcrypt.compareSync(passwordBody, passwordDb);
};

export const hashOtp = (otp: string) => {
  return bcrypt.hashSync(otp, 10);
};

export const compareOtp = (otpBody: string, otpDb: string) => {
  return bcrypt.compareSync(otpBody, otpDb);
};
