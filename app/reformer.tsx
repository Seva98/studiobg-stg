import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Reformer = () => {
  const texts = [
    'Pilates reformer je speciální cvičební přístroj používaný při cvičení Pilates. Jeho hlavním účelem je poskytnout odpor, a zároveň podporu při cvičení, což umožňuje provádět cviky s větší efektivitou.',
    'Cvičení na reformeru posiluje svaly, zlepšuje posturu, snižuje se riziko poranění kloubů a páteře, zlepšuje koordinaci a stabilitu.',
    'Samozřejmě, stejně jako jakékoliv jiné cvičení - pomáhá odbourávat stres.',
    'Cvičení na reformeru je o větší koordinaci těla. Zároveň se člověk více soustředí na správnost provedení cviku.',
    'Lekce není vhodná pro těhotné ženy.',
  ];
  return (
    <LecturePage className="bg-ternary" image="/other/reformer.jpg" title="Reformer" page="01.c">
      <div className="flex flex-col gap-6 my-auto">
        {texts.map((text, i) => (
          <Typography variant="lead" key={`reformer-text-${i}`}>
            {text}
          </Typography>
        ))}
      </div>
    </LecturePage>
  );
};

export default Reformer;
