import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Pilates = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/pilates.jpg" title="Pilates" page="01.A">
      <Typography variant="lead" className="max-w-[60%] mt-4">
        Pilates lekce je cvičení, které kombinuje sílu, flexibilitu a kontroluje stav a kvalitu dechu. Během lekce se často pracuje na podložce, anebo s pomocí
        speciálních strojů, jako je Pilates reformer. Cvičení se zaměřuje na posílení hlubokých svalů břicha, zad a pánevního dna, což pomáhá zlepšit stabilitu
        páteře a celkovou tělesnou koordinaci. Velký důraz se klade na dýchání a aktivaci středu těla.
      </Typography>
      <Typography variant="lead" className="max-w-[60%] self-end mt-20">
        Během 60 minutové nejdříve zvýšíme činnost kardiovaskulárního systému (zvýšíme tepovou frekvenci) a poté se zaměříme na posílení celého těla, na konci
        lekce posledních 10 min věnujeme protažení. Výsledkem bude lepší stabilita, flexibilita, zpevněné tělo, eliminuje se bolest zad, celkový pocit uvolnění.
        Pilates je určen pro všechny věkové kategorie, je šetrný k tělu a funguje jako prevence bolestí zad.
      </Typography>
    </LecturePage>
  );
};

export default Pilates;
