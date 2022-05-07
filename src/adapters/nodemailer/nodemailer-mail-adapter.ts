import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c2146bfc94db54",
      pass: "2407c536300872"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail(data: SendMailData) {
        const { subject, body } = data;
        await transport.sendMail({
            from: 'Equipe <noreply@feedback.com>',
            to: 'Amanda <amandavmanduca@gmail.com>',
            subject: subject,
            html: body,
        });
    }
}