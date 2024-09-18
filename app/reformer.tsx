import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Reformer = () => {
  const texts = [
    'Reformer je stroj, který vytvořil pan Joseph Pilates, zakladatel metody Pilates. Jeho záměrem bylo, aby reformer vedl k nápravě funkčnosti celého těla, vyšší síle, stabilitě, flexibilitě a také k posílení celého těla.',
    'Reformer se stal populárním díky jeho rozmanitosti. Tento druh cvičení je ideální skutečně pro všechny. Od osob hledající rehabilitaci pro své tělo, až po profesionální sportovce. Cvičení na reformeru je především o kontrolovaných a plynulých pohybech, díky kterým zpevňujete celé tělo. Intenzitu si volíte sami.',
    'Lekce je vhodná pro všechny věkové skupiny, bez ohledu na fyzickou zdatnost, Pokud však řešíte nějaký konkrétní zdravotní problém, nebo jste těhotná, doporučujeme nejdříve 3 až 5 individuálních lekcí.',
  ];
  return (
    <LecturePage className="bg-ternary" image="/other/reformer.jpg" title="Reformer" page="01.c" id="Reformer" isLecture>
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
