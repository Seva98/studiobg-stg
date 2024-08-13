import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const items = [
  {
    text: 'Pilates Reformer',
    price: '700 ,-',
  },
  {
    text: 'Barre',
    price: '350 ,-',
  },
  {
    text: 'Total Barre',
    price: '450 ,-',
  },
  {
    text: 'Pilates',
    price: '300 ,-',
  },
  {
    text: 'Yoga',
    price: '300 ,-',
  },
  {
    text: '1 měsíc permanentka',
    price: '?? ,-',
  },
];

const Pricing = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/barre.jpg" title="Ceník" page="03" id="Cenik">
      <div className="flex flex-col h-full justify-center ">
        {items.map(({ text, price }, i) => (
          <div className={cn('grid grid-cols-2 gap-32', i === items.length - 1 ? 'mt-16' : '')} key={text}>
            <Typography variant="h3">{text}</Typography>
            <Typography variant="h3">{price}</Typography>
          </div>
        ))}
      </div>
    </LecturePage>
  );
};

export default Pricing;
