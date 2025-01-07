import Handwritten from '@/components/ui/handwritten/handwritten';
import Markdown from '@/components/ui/markdown';
import Typography from '@/components/ui/typography';
import Image from 'next/image';

const article1 = `Naše milé klientky,

Od otevření našeho studia uběhly 3 měsíce a my jsme za tu poměrně krátkou domu stihly i pár skvělých akcí, které určitě stojí za zmínku.

Jako první u nás proběhla akce pod názvem Pumpkin Spice Barre. Krásné sobotní dopoledne jsme nejdříve nastartovaly prodlouženou 90 minutovou lekcí barre, kde jsme si všechny daly pořádně do těla, abychom se pak mohly nadlábnout skvělými dobrotami.

Mňamky jako dýňový chlebík a mini koblížky nám upekla naše klientka Vendulka, které moc děkujeme, protože jsme si opravdu pochutnaly. No, a samozřejmě co by byla akce Pumpkin Spice bez pořádného lattéčka, které všechny tolik milujeme? Za lattéčka děkujeme našim skoro sousedům ze Shothouse, byly opravdu výborné.

Celá akce proběhla ve skvělé náladě, podzimním duchu a s očekáváním a těšením se na další takovou akci! :)`;

const article2 = `Proto další podobná akce na sebe nenechala dlouho čekat, a tak jsme si příjemný předvánoční čas a shon zpestřily akcí Gingerbread Barre.

Opět jsme se všechny sešly v našem studiu, a mákly jsme si na lekci barre. Po lekci přišla opět slibovaná odměna. Ani tentokrát nám nechyběly dobroty jako mrkvový dort nebo perníkový chlebík a perníkové lattéčko. Vánoční perníčky nám upekla naše klientka p. Ondrušová - byly skvělé a jen se po nich zaprášilo... děkujeme! :)

Při téhle příležitosti jsme samozřejmě nemohly vynechat ani ochutnávku vaječňáku nebo svařáku... ano, předvánoční atmosféra na nás dýchala opravdu ze všech koutů a nechyběla skvělá nálada a to hlavně díky Vám! Ukázku, jak celá akce probíhala najdete na našem Instagramu, reelsko pro nás zpracovala naše TikTokerka Adélka :)`;

const article3 = `Poslední předvánoční akcí byly dvě taneční lekce pod vedením skvělé Barbory Onderkové. Bára je komerční a divadelní tanečnice, lektorka dětí i dospělých a sestra Terezy :) 

Dvě lekce pod názvem „Dance like a Beyoncé“ byly opravdu skvělé. Každá z nás si chce občas zatančit, uvolnit se a cítit se jako hvězda.

Tyto dvě lekce byly opravdu plné tance a hlavně zábavy. Naučily jsme se krátkou choreografii na hudbu Beyoncé, zjistily jsme, že zapamatovat si jen pár kroků je opravdu náročné, že některé pohyby už opravdu pro nás nejsou, a taky to, že nám to vlastně vůbec nevadí :)

Důležité je si lekce užít a na chvíli zapomenout na všechny starosti a povinnosti.
`;

const Article = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        <Typography variant="h2">Pumpkin Spice Barre</Typography>
        <Markdown content={article1} />
        <div className="grid grid-cols-2 gap-16">
          <Image src="/blog/vikendova-akce-studia/article1a.jpeg" alt="article1a" className="object-cover h-full" width={600} height={846} />
          <Image src="/blog/vikendova-akce-studia/article1b.jpeg" alt="article1b" className="object-cover h-full" width={600} height={846} />
        </div>
        <Typography variant="h2">Gingerbread Barre</Typography>
        <Markdown content={article2} />
        <div className="grid grid-cols-2 gap-16">
          <Image src="/blog/vikendova-akce-studia/article2a.jpeg" alt="article2a" className="object-cover h-full" width={600} height={846} />
          <Image src="/blog/vikendova-akce-studia/article2b.jpeg" alt="article2b" className="object-cover h-full" width={600} height={846} />
        </div>
        <Typography variant="h2">Dance like a Beyoncé</Typography>
        <Markdown content={article3} />
        <div className="grid grid-cols-2 gap-16">
          <Image src="/blog/vikendova-akce-studia/article3a.jpeg" alt="article3a" className="object-cover h-full" width={600} height={846} />
          <Image src="/blog/vikendova-akce-studia/article3b.jpeg" alt="article3b" className="object-cover h-full" width={600} height={846} />
        </div>
      </div>
      <Handwritten variant="signature" className="ms-auto">
        Tereza Ševčík
      </Handwritten>
    </div>
  );
};

export default Article;
