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
    <LecturePage className="bg-secondary" image="/foto/276A7594.jpg" title="Pilates" page="01.b" showNavigation={false}>
      <div className="flex flex-col gap-6 my-auto">
        <Typography variant="lead">
          JUICY BEAUTY BOOTY - Nejdříve dosáhneme zvýšené tepové frekvence a následně začneme formovat naše těla pomocí cvičebních prvků z metody pilates. Tato
          lekce je převážně zaměřena na hýždě a nohy, aby svaly byly dlouhé a hladké. Ke konci lekce přidáme cviky na střed těla a horní končetiny. Cvičení
          probíhá na podložce s pomůckami.
        </Typography>
        <Typography variant="lead">Lekce je vhodná pro začátečníky.</Typography>
        <Typography variant="lead">
          YOGALATES - Kombinace jógy a pilates. Nejdříve tělo připravíme na pohyb, následuje sekvence vinyasy jógy, po zahřátí začneme zpevňovat jednotlivé
          partie díky izolovaným cvikům pilates a nakonec se pořádně protáhneme. Lekce nekončí šavásanou, jen si popřejeme krásný den. Lekce jsou vhodné pro
          začátečníky, jen je potřeba vydržet první chvíle nepohody.
        </Typography>
      </div>
    </LecturePage>
  );
};

export default Pilates2;
