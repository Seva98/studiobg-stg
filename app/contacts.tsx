'use client';

import PageNumber from '@/components/pageNumber';
import FormSubmitButton from '@/components/ui/formSubmitButton';
import { Input } from '@/components/ui/input';
import Loader from '@/components/ui/loader';
import Section from '@/components/ui/section';
import { Textarea } from '@/components/ui/textarea';
import Typography from '@/components/ui/typography';
import { sendContactForm } from '@/server/sendContactForm';
import { useRef, useState } from 'react';

const ContactValue = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex gap-2">
    <Typography>{title}:</Typography>
    <Typography>{children}</Typography>
  </div>
);

const Contacts = ({ secondaryBg = false }: { secondaryBg?: boolean }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await sendContactForm(formData);
    if (result) {
      setShowSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5 seconds
    }
    setLoading(false);
  };

  return (
    <Section className={`${secondaryBg ? 'bg-secondary' : 'bg-ternary'} grid lg:grid-cols-[4fr_5fr] gap-6 `} padding="lg" id="Kontakty">
      <div className="flex flex-col h-full gap-4 uppercase text-lg tracking-tighter font-thin ">
        <Typography variant="h1" className="uppercase ">
          Kontakty
        </Typography>
        <div className="flex flex-col gap-1 ">
          <ContactValue title="Email recepce">
            <a href="mailto:letmeglow@studiobg.cz">letmeglow@studiobg.cz</a>
          </ContactValue>
          <ContactValue title="Telefon">
            <a href="tel:+420734677225">734 677 225</a>
          </ContactValue>
          <ContactValue title="Adresa">Veleslavínova 4, Ostrava 📍</ContactValue>
          <ContactValue title="Bankovní spojení">3145110028/3030</ContactValue>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.169841540513!2d18.283089776966044!3d49.83926617148197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e324db50818b%3A0x633f7cd920095dfd!2sVeleslav%C3%ADnova%204%2C%20702%2000%20Moravsk%C3%A1%20Ostrava%20a%20P%C5%99%C3%ADvoz!5e0!3m2!1sen!2scz!4v1722436475006!5m2!1sen!2scz"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] lg:h-full"
        ></iframe>
      </div>
      <div className="flex flex-col mx-auto h-full w-3/4 gap-4 uppercase text-lg tracking-tighter font-thin items-center justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex gap-1 flex-col w-full md:w-3/4 bg-orange-50 p-2 md:p-8 shadow-md border border-gray-200 h-full md:h-1/2"
        >
          <Typography>Kontaktujte nás</Typography>
          <Input type="text" name="name" required placeholder="Jméno:" className="border-none shadow-none text-xl placeholder:text-xl" />
          <Input type="email" name="email" required placeholder="Email:" className="border-none shadow-none text-xl placeholder:text-xl" />
          <Textarea name="message" required placeholder="Zpráva:" className="border-none shadow-none text-xl placeholder:text-xl resize-none h-1/2" />
          <FormSubmitButton className="text-primary">{loading ? <Loader /> : 'Odeslat'}</FormSubmitButton>
          {showSuccess && (
            <Typography variant="small" className="text-center">
              Zpráva byla úspěšně odeslána!
            </Typography>
          )}
        </form>
      </div>
      <PageNumber page="04" />
    </Section>
  );
};

export default Contacts;
