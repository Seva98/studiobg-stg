import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `Cvičení na stroji Reformer v poslední době zažívá obrovský boom. Díky sociálním sítím registrujeme stále nové lektory a studia. Cvičení na strojích je nejen elegantní a „Instafriendly“, ale pod vedením zkušeného lektora dosáhnete požadovaných výsledků dříve než během běžného cvičení na podložce.

Dlouhé štíhlé svaly jsou velmi žádoucí zvlášť pro ty, kteří nehledají zrovna objemové cviky. Co je ale hlavním přínosem reformeru (a je to bohužel často opomíjené), je správné postavení těla. Pokud budete pravidelně cvičit pilates (ať už na podložce či na strojích), postupně se zbavíte bolesti Vašich zad, zpevníte střed těla a tím ulevíte celé páteři, včetně té bederní. Díky cvičení také předcházíte zranění kloubů a vazů.

Skupinové lekce jsou uvedeny v [rozvrhu](https://studiobg.isportsystem.cz). Pro individuální lekci nás [kontaktujte telefonicky či emailem](/#Kontakty).`;

const Article = () => {
  return (
    <div className="flex flex-col gap-8">
      <Handwritten>Reformer</Handwritten>
      <div>
        <Markdown content={article} />
      </div>
      <Handwritten variant="signature" className="ms-auto">
        Lenka Eben
      </Handwritten>
    </div>
  );
};

export default Article;
