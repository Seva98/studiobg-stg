import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Barre = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/barre.jpg" title="Barre" page="01.d" id="Barre">
      <div className="my-auto w-full flex flex-col gap-20">
        <Typography variant="lead" className="max-w-[60%]">
          Cvičení Barre kombinuje prvky baletu, jógy a pilates. Probíhá s využitím tyče jako opory. Využívají se rovněž pomůcky jako činky či gumičky. Během
          cvičení se pracuje na posílení svalů celého těla, zejména s důrazem na nohy, hýždě, břicho a horní část.
        </Typography>
        <Typography variant="lead" className="max-w-[60%] self-center">
          Typická lekce začíná rozcvičkou, která se zaměřuje na zahřátí kloubů a svalů. Poté následuje série cviků prováděných u barre, které kombinují
          izometrické cvičení - kdy se svaly stahují, aniž by se měnila délka svalu - s dynamickými pohyby. Cvičení je vhodné pro všechny věkové kategorie a
          úrovně kondice.
        </Typography>
      </div>
    </LecturePage>
  );
};

export default Barre;
