import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `Milé dámy a pánové,

Vítáme Vás v Balance & Glow Studiu. Toto studio je nápadem a myšlenkou dvou žen - Lenky a Terky, které sdílí společnou vášen a chuť k pohybu. Toto studio je naším vysněným projektem a odrazem naší společné lásky k pohybu, designu a chutí sdílet nabité znalosti a dovednosti právě s Vámi - našimi klienty.

Naše studio je zaměřeno především na Pilates reformery, barre, pilates a yogu. Benefity všech těchto lekcí jsou krásné, dlouhé, štíhlé svaly, správné držení těla, pružnost a flexibilita.

A proč Balance & Glow? Protože toto jsou dvě velmi důležité věci, kterých chceme s Vámi - našimi klienty - dosáhnout. Důležitým faktorem je mít v životě balance a to ve všech ohledech. No a pak … pak se budete cítit skvěle a můžete jen zářit!
`;

const Article = () => {
  return (
    <div className="flex flex-col gap-8">
      <Handwritten>Thank you</Handwritten>
      <div>
        <Markdown content={article} />
      </div>
      <Handwritten variant="signature" className="ms-auto">
        Lenka & Terka
      </Handwritten>
    </div>
  );
};

export default Article;
