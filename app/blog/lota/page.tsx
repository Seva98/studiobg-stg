import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';

const article = `Milé dámy,

už jste pochopily, že chceme pro Vás to nejlepší. Přesně víme, jak může být menstruace nepříjemná. Tak proč si ji alespoň trošku nezpříjemnit? Tampony značky LOTA jsou vyrobeny z organické bavlny, takže do sebe necpete chemický hnus v podobě běžně dostupných hygienických tamponů.

Díky tomuto zpracování je LOTA schopna poskytnout větší komfort během nošení a také snižuje bolest během menstruace (otestováno osobně lektorkami).

Denisa Paciorková, zakladatelka značky LOTA, o celém příběhu vypráví na svých webových stránkách [loa.care.cz](https://loa.care.cz/).

Nám se tento koncept velmi líbí, protože Denisa ctí stejnou filozofii a její slogan zní: **Because we care.**`;

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
