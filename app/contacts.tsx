import PageNumber from '@/components/pageNumber';
import { Button } from '@/components/ui/button';
import FormSubmitButton from '@/components/ui/formSubmitButton';
import { Input } from '@/components/ui/input';
import Section from '@/components/ui/section';
import { Textarea } from '@/components/ui/textarea';
import Typography from '@/components/ui/typography';
import { sendContactForm } from '@/server/sendContactForm';
import Image from 'next/image';

const ContactValue = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex gap-2">
    <Typography>{title}:</Typography>
    <Typography>{children}</Typography>
  </div>
);

const Contacts = () => {
  return (
    <Section className="bg-ternary grid grid-cols-[2fr_2fr_3fr] gap-6" padding="lg" id="Kontakty">
      <Image src="/other/contacts1.jpeg" width={525} height={900} alt="Contacts 1" className="object-cover w-full h-full" />
      <Image src="/other/contacts2.jpeg" width={599} height={900} alt="Contacts 2" className="object-cover w-full h-full" />
      <div className="flex flex-col h-full gap-4 uppercase text-lg tracking-tighter font-thin">
        <Typography variant="h1" className="uppercase ">
          Kontakty
        </Typography>
        <div className="flex flex-col gap-1 ">
          <ContactValue title="Email recepce">
            <a href="mailto:info@studiobg.cz">info@studiobg.cz</a>
          </ContactValue>
          <ContactValue title="Telefon">
            <a href="tel:+420736129088">736 129 088</a>
          </ContactValue>
          <ContactValue title="Adresa">Soon 🤫, Ostrava 📍</ContactValue>
          <ContactValue title="Bankovní spojení">11122233/0800 </ContactValue>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10292.69519288601!2d18.271713175065067!3d49.83919182301016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711586a3124e79d%3A0x891973fb9f9e9144!2sOstrava!5e0!3m2!1sen!2scz!4v1717229438621!5m2!1sen!2scz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-h-64"
        ></iframe>
        <form action={sendContactForm} className="flex gap-1 flex-col flex-grow bg-orange-50 p-8 shadow-md border border-gray-200 h-full">
          <Typography>Kontaktujte nás</Typography>
          <Input type="text" name="name" required placeholder="Jméno:" className="border-none shadow-none text-xl placeholder:text-xl" />
          <Input type="email" name="email" required placeholder="Email:" className="border-none shadow-none text-xl placeholder:text-xl" />
          <Textarea name="message" required placeholder="Zpráva:" className="border-none shadow-none text-xl placeholder:text-xl resize-none h-full" />
          <FormSubmitButton className="text-primary">Odeslat</FormSubmitButton>
        </form>
      </div>
      <PageNumber page="03" />
    </Section>
  );
};

export default Contacts;
