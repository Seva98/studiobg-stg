import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';

const Yoga = () => {
  const texts = [
    'Jóga je v západní Evropě brána jako prostředek k větší flexibilitě, stabilitě a vyrovnání vnitřní energie. Hlubší filozofie pojednává o znalosti dechových technik, umění meditace a holistickém způsobu života.',
    'Naše studio se zaměřuje na rychlejší typy jógy, které jsou vedeny v 60 minutových intervalech.',
    'V našem rozvrhu naleznete tyto kurzy:',
    'YOGALATES - kombinace vinyása jogy a pilates, kdy přecházíme z asán do intervalů pilates. Na konci lekce je zasloužená šavásana.',
    'Vin Yin Yoga - kombinace dynamiky a maximálního uvolnění v podobě jin jógy.',
    'GOOD MORNING VIBES - ranní protažení, s lehkou dynamikou pro zdravou páteř.',
    'BALANCE AND GLOW - lekce jsou zaměřeny na stabilitu a sílu. Zapojujeme pánevní dno, hrajeme si s balančními pozicemi a na konci lekce 10 minutové relaxační cvičení. ',
    'SUNDAY FUNDAY - yogalates - 90 min lekce kombinuje vinyása jógu a pilates. Ranní protažení a posílení.',
  ];
  return (
    <LecturePage className="bg-ternary" image="/foto/276A7600.jpg" title="Yoga" page="01.e" id="Yoga">
      <div className="flex flex-col gap-6 my-auto">
        {texts.map((text, i) => (
          <Typography variant="lead" key={`yoga-text-${i}`}>
            {text}
          </Typography>
        ))}
      </div>
    </LecturePage>
  );
};

export default Yoga;
