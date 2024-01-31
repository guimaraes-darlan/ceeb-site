import * as nodemailer from 'nodemailer';

export type SendMailProps = {
  to: string;
  subject: string;
  data: {
    text?: string;
    html?: string;
  };
};

export class ServiceMailService {
  async send({ to, data, subject }: SendMailProps) {
    try {
      const service = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      await service.verify();
      const response = await service.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        ...data,
      });
      return { response, sendCode: this.getSendCode(response.response) };
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  }

  getSendCode(response: string) {
    try {
      return Number(response.substring(0, response.indexOf(' ')));
    } catch (error) {
      console.log(error);
    }
  }
}