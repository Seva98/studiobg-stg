import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `**Co je to vlastně „barre?“**

*„Barre“* jakožto pojem z francouzštiny je označení pro baletní tyče, které jsou oporou při baletu. Pro cvičení barre to tedy znamená, že část lekce je u baletní tyče, která nám pomáhá ke správnému držení těla, ale je nám také oporou v různých pozicích a cvicích. 

Cvičení Total Barre vzniklo roku 1959 v Londýně. Tehdejší balerína, která si vážně zranila záda hledala kompromis mezi svým milovaným baletem a rehabilitačním cvičením, aby se mohla dostat zpátky do formy.

V dnešní době cvičení barre nabízí nekonečno možností. Barre spojuje prvky baletu, pilates a jógy. Cvičení většinou probíhá u baletní tyče a na podložce. Využívá spoustu cvičících pomůcek jako jsou jednoruční činky, lehká závaží na nohy a ruce, odporové gumy, soft bally a další. Při cvičení se zaměřujeme na protažení a posílení svalů celého těla, anebo budeme cílit na různé partie, které budeme posilovat. Cvičením barre si zlepšíte fyzickou kondici, flexibilitu, krásně vyformujete tělo, zlepšíte si náladu a rozhodně se budete bavit! :)

V budoucnu se u nás také můžete těšit na lekce „Ballet Barre“, které se budou zaměřovat více i na klasické baletní cviky, které jsou náročné, ale každá z nás jsme si aspoň na chvilinku přály být baletky, tak proč bychom to nezkusily teď?
`;

const VitameVas = () => {
  return (
    <div className="flex flex-col gap-8">
      <Handwritten>Barre</Handwritten>
      <div>
        <Markdown content={article} />
      </div>
      <Handwritten variant="signature" className="ms-auto">
        Tereza Ševčík
      </Handwritten>
    </div>
  );
};

export default VitameVas;
