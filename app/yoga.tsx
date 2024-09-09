import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Yoga = () => {
  return (
    <LecturePage className="bg-ternary" image="/foto/276A7600.jpg" title="Yoga" page="01.e" id="Yoga">
      <div className="flex flex-col gap-6 my-auto">
        <Typography variant="lead">
          Jóga je v západní Evropě brána jako prostředek k větší flexibilitě, stabilitě a vyrovnání vnitřní energie. Hlubší filozofie pojednává o znalosti
          dechových technik, umění meditace a holistickém způsobu života.
        </Typography>
        <Typography variant="lead">Naše studio se zaměřuje na rychlejší typy jógy, které jsou vedeny v 60 či 75 minutových intervalech.</Typography>
        <Typography variant="lead">V rozvrhu naleznete tyto kurzy:</Typography>
        <Typography variant="lead">
          YOGALATES - Kombinace jógy a pilates. Nejdříve tělo připravíme na pohyb, následuje sekvence vinyasy jógy, po zahřátí začneme zpevňovat jednotlivé
          partie díky izolovaným cvikům pilates a nakonec se pořádně protáhneme. Lekce nekončí šavásanou, jen si popřejeme krásný den. Lekce jsou vhodné pro
          začátečníky, jen je potřeba vydržet první chvíle nepohody.
        </Typography>
        <Typography variant="lead">
          VIN YIN YOGA - Zahrnuje dynamickou vinyasu a klidnou jin jógu. Prvních 40 min se zahřejeme, zapracujeme na stabilitě a koordinaci v oblíbených
          dynamických sekvencích a v části jinové se ponoříme do maximální relaxace a uvolnění. V jinových pozicích se setrvává až několik minut, jedná se o
          jógu, která rozpouští hluboko uložené napětí, tedy i mentální. Díky uvolnění se svaly dokáží více protáhnout a zregenerovat. Lekce je vhodná pro
          začátečníky.
        </Typography>
      </div>
    </LecturePage>
  );
};

export default Yoga;
