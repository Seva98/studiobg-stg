import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Pilates2 = () => {
  return (
    <LecturePage className="bg-secondary" image="/foto/276A7594.jpg" title="Pilates" page="01.b" showNavigation={false} isLecture>
      <div className="flex flex-col gap-6 my-auto">
        <Typography variant="lead">
          JUICY BOOTY - Nejdříve dosáhneme zvýšené tepové frekvence a následně začneme formovat naše těla pomocí cvičebních prvků z metody pilates. Tato lekce
          je převážně zaměřena na hýždě a nohy, aby svaly byly dlouhé a hladké. Ke konci lekce přidáme cviky na střed těla a horní končetiny. Cvičení probíhá na
          podložce s pomůckami.
        </Typography>
        <Typography variant="lead">Lekce je vhodná pro začátečníky.</Typography>
        <Typography variant="lead">
          YOGA & PILATES - Kombinace jógy a pilates. Nejdříve tělo připravíme na pohyb, následuje sekvence vinyasy jógy, po zahřátí začneme zpevňovat jednotlivé
          partie díky izolovaným cvikům pilates a nakonec se pořádně protáhneme. Lekce nekončí šavásanou, jen si popřejeme krásný den. Lekce jsou vhodné pro
          začátečníky, jen je potřeba vydržet první chvíle nepohody.
        </Typography>
      </div>
    </LecturePage>
  );
};

export default Pilates2;
