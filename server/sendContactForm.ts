'use server';

import { getFormDataValues } from '@/utils/getFormDataValues';
import { sendEmail } from './sendEmail';

export const sendContactForm = async (formData: FormData) => {
  const ownerEmail = process.env.EMAIL;
  if (!ownerEmail) throw new Error('Email sender not provided in Env');
  const { name, email: senderEmail, message } = getFormDataValues(formData, ['name', 'email', 'message']);
  if (!name || !senderEmail || !message) throw new Error('Missing required fields');

  await sendEmail({
    from: ownerEmail,
    to: ownerEmail,
    text: `Email od <a href="mailto:${senderEmail}">${senderEmail}</a>\n\n${message}`,
    subject: `Kontaktní formulář - ${name}`,
  });
};
