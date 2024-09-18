import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const items = [
  {
    text: 'Do 5 osob',
    price: '750 ,-',
  },
  {
    text: '5-10 osob',
    price: '1500 ,-',
  },
  {
    text: '11 osob a více',
    price: '2500 ,-',
  },
];

const Rent = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/barre.jpg" title="Pronájem prostor" page="03" id="Pronajem">
      <div className="flex flex-col h-full justify-center ">
        {items.map(({ text, price }, i) => (
          <div className={cn('grid grid-cols-[1fr_auto] gap-32 me-2 md:me-4 lg:me-6 xl:me-16')} key={text}>
            {text ? (
              <>
                <Typography variant="h4" className="uppercase">
                  {text}
                </Typography>
                <Typography variant="h4">{price}</Typography>
              </>
            ) : (
              <br />
            )}
          </div>
        ))}
      </div>
    </LecturePage>
  );
};

export default Rent;
