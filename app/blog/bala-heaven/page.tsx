import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `Značku Bala založili manželé Natalie a Max v roce 2018. Dva roky společně balili produkty v garáži a na zeď tehdy napsali: Good things come to those who sweat. Tento slogan nese v sobě mnohem víc. Nese v sobě denní motivaci pro každého člověka, který si jde za svým snem.

Úspěch potřebuje čas, úspěch potřebuje zrát a nyní už své produkty dodávají do celého světa. Bala spojuje funkčnost a nadčasový design. Manželé věří, že oblast fitness a móda se mohou vzájemně doplňovat.

V našem studiu jsme chtěly svým klientům poskytnout maximální kvalitu, která bude splňovat dnešní moderní koncepci - estetický vzhled pomůcek, které ale vydrží zátěž během cvičení.

Bala byla pro nás jasná volba. Kromě podložek, činek, odporových gum, máme také závaží na ruce a na nohy, které také nabízíme ke koupi v našem studiu.

Cena závaží: 1500 CZK/pár

Cena podložky: 2500 CZK/kus (na objednání)`;

const Article = () => {
  return (
    <div className="flex flex-col gap-8">
      <Handwritten>Bala Heaven</Handwritten>
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
