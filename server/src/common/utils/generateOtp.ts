import otpGenerate from 'otp-generator';

export const generateOtp = () => {
  const otp = otpGenerate.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });
  const otpExpire = Date.now() + 5 * 60 * 1000;
  return { otp, otpExpire };
};
