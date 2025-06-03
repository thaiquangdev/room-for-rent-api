import * as dotenv from 'dotenv';

dotenv.config();

export const mailConfig = {
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT as string),
  secure: process.env.MAIL_SECURE === 'true',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};
