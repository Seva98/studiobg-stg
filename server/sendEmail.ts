'use server';

import nodemailer from 'nodemailer';

type EmailData = {
  to: string;
  from: string;
  text: string;
  subject: string;
};

export const sendEmail = async (emailData: EmailData) => {
  const { to, from, text, subject } = emailData;

  if (!to) throw new Error('Email recipient not provided');
  if (!from) throw new Error('Email sender not provided');
  if (!text) throw new Error('Email text not provided');
  if (!subject) throw new Error('Email subject not provided');

  const auth = {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  };
  const mailData = {
    to,
    from,
    subject,
    text,
    html: text.replaceAll(/\r\n|\n|\r/g, '<br>'),
  };

  const transporter = nodemailer.createTransport({
    host: 'smtp.forpsi.com',
    secure: true,
    port: 465,
    auth: auth,
  });

  const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      console.log('success 1', success, 'error', error);
      if (success) {
        resolve(success);
      }
      reject(error);
    });
  });

  if (!server) {
    throw new Error('Error failed verifying email');
  }

  await transporter.sendMail(mailData);
};
