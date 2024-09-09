import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `I v případě výběru reformeru jsme se zaměřili na kvalitu. Kromě funkčnosti jsme také hledali stroj, který bude splňovat veškeré atributy bezpečnosti během cvičení. Společnost Body balance dodává Reformery, Cadilacy a další cvičební pomůcky v rámci pilatesové metody do celého světa. Získala několik certifikací, které běžně dostupné reformery nemají. A proto jsme si jisti tím, že Vám nabízíme to nejlepší, co existuje na světovém trhu.

Kromě toho Body balance zaštiťuje proškolené odborníky po celém světe. Lektorka Lenka se pravidelně vzdělává a doplňuje znalosti v tomto institutu, který sídlí v Praze. Název školícího střediska je MyPilates. Školitelé v MyPilates jsou vysoce kvalifikovaní odborníci, kteří Vás kurzem provedou s maximální precizností a veškeré teoretické znalosti přenesou do praktické části.

Máte zájem stát se lektorem Pilates Mat nebo Pilates Reformer ? Ozvěte se nám!`;

const Article = () => {
  return (
    <div className="flex flex-col gap-8">
      <Handwritten>Allegro 1</Handwritten>
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
