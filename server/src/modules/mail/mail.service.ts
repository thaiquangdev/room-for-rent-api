import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { mailConfig } from 'src/common/configs/mail.config';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport(mailConfig);

  async sendMailToOtp(
    to: string,
    subject: string,
    html: string,
  ): Promise<SMTPTransport.SentMessageInfo> {
    const info = await this.transporter.sendMail({
      from: `Phòng trọ 123 - Kênh thông tin phòng trọ <${mailConfig.auth.user}>`,
      to,
      subject,
      html,
    });

    return info;
  }
}
