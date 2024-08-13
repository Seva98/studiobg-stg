import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Pilates2 = () => {
  const texts = [
    'V našem studiu máme nabízíme tyto lekce pilates: ',
    'JUICY BEAUTY BOOTY - zaměřeno na dolní končetinu, mobilitu a stabilitu kloubů, pevný, kulatý zadek a dlouhé, štíhlí svaly dolních končetin.',
    'KILLER ABS PILATES - zaměřeno na vyšší tepovou frekvenci a horní část těla. Především ramena, paže a především CORE - plošší bříško, rovnější záda. ',
    'YOGALATES - kombinace vinyása jogy a pilates, kdy přecházíme z asán do intervalů pilates. Na konci lekce je zasloužená šavásana.  ',
    'MONDAY´s KICKKK OFFF - zaměřeno na celé tělo s pomůckami',
    'FRIDAY´s SLAY - zaměřeno na celé tělo s pomůckami ',
    'SUNDAY FUNDAY yogalates - 90 min lekce kombinuje vinyása  jógu a pilates. Ranní protažení a posílení. ',
    'PILATES - KURZ PRO ZAČÁTEČNÍKY - doporučujeme všem, kteří se cvičením a zdravým životním stylem teprve začínají. Jedná se o 18 po sobě jdoucích lekcí.',
  ];
  return (
    <LecturePage className="bg-secondary" image="/other/pilates2.jpg" title="Pilates" page="01.b" showNavigation={false}>
      <div className="flex flex-col gap-6 my-auto">
        {texts.map((text, i) => (
          <Typography variant="lead" key={`pilates2-text-${i}`}>
            {text}
          </Typography>
        ))}
      </div>
    </LecturePage>
  );
};

export default Pilates2;
