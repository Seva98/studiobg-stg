import PageNumber from '@/components/pageNumber';
import Person, { PersonType } from '@/components/person';
import Section from '@/components/ui/section';
import Typography from '@/components/ui/typography';

const Lectors = () => {
  const lectors: PersonType[] = [
    {
      name: 'Lenka Eben',
      image: '/person/lenka.jpeg',
      text: 'Lenka je certifikovaná lektorka pilates a jógy. Má za sebou mnoho let praxe a výuky.',
    },
    {
      name: 'Tereza Ševčík',
      image: '/person/tereza.jpeg',
      text: 'Tereza je lektorka pilates a jógy. Její lekce jsou zaměřeny na posílení celého těla a zlepšení flexibility. ',
    },
    {
      name: 'Kristýna Plačková',
      image: '/person/kristyna.jpeg',
      text: 'Kristýna je lektorkou barre. Má za sebou mnoho let praxe a výuky.',
    },
    {
      name: 'Marie Holan',
      image: '/person/marie.jpeg',
      text: 'Marie je lektorka pilates a jógy. Má za sebou mnoho let praxe a výuky.',
    },
  ];

  return (
    <Section className="bg-secondary flex flex-col" padding="lg">
      <Typography variant="h1" className="text-center uppercase flex-shrink">
        Lektoři
      </Typography>
      <div className="grid grid-cols-4 gap-16 flex-grow content-center">
        {lectors.map((lector, i) => (
          <Person key={`lector-${i}`} person={lector} />
        ))}
      </div>
      <Typography variant="h1" className="absolute bottom-16 right-16 uppercase">
        Rozvrh
      </Typography>
      <PageNumber page="02" />
    </Section>
  );
};

export default Lectors;
