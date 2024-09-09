import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Pilates = () => {
  return (
    <LecturePage className="bg-ternary" image="/foto/276A7592.jpg" title="Pilates" page="01.a" id="Pilates">
      <div className="my-auto w-full flex flex-col gap-20">
        <Typography variant="lead" className="max-w-[60%]">
          Metoda Pilates je cvičení, které kombinuje sílu, flexibilitu a kontroluje kvalitu dechu. Během lekce se často pracuje na podložce, anebo s pomocí
          speciálních strojů, jako je Pilates reformer. Cvičení se zaměřuje na posílení hlubokých svalů břicha, zad a pánevního dna, což pomáhá zlepšit
          stabilitu páteře a celkovou tělesnou koordinaci. Velký důraz se klade na dýchání a aktivaci středu těla.
        </Typography>
        <Typography variant="lead" className="max-w-[60%] self-center">
          Během 60 minutové nejdříve zvýšíme činnost kardiovaskulárního systému (zvýšíme tepovou frekvenci) a poté se zaměříme na posílení celého těla, na konci
          lekce posledních 10 min věnujeme protažení. Výsledkem bude lepší stabilita, flexibilita, zpevněné tělo, eliminuje se bolest zad, celkový pocit
          uvolnění. Pilates je určen pro všechny věkové kategorie, je šetrný k tělu a funguje jako prevence bolestí zad.
        </Typography>
      </div>
    </LecturePage>
  );
};

export default Pilates;
