import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const itemsNew = [
  {
    text: 'Pilates, yoga',
    price: '250 ,-',
  },
  {
    text: 'Sweet & Spicy Pilates',
    price: '255 ,-',
  },
  {
    text: 'Mum & Kids - Yoga Workout',
    price: '270 ,-',
  },
  {
    text: 'Lunch Time Yoga - EN/CZ',
    price: '250 ,-',
  },
  {
    text: 'Barre',
    price: '275 ,-',
  },
  {
    text: 'Reformer',
    price: '560 ,-',
  },
  {
    text: '',
    price: '',
  },
  {
    text: '',
    price: '',
  },
  {
    text: 'Individuální lekce Barre',
    price: '',
  },
  {
    text: '1 osoba',
    price: '600 ,-',
  },
  {
    text: '2 osoby',
    price: '1000 ,-',
  },
  {
    text: '',
    price: '',
  },
  {
    text: '',
    price: '',
  },
  {
    text: 'Individuální lekce Reformer',
    price: '',
  },
  {
    text: '1 osoba',
    price: '1000 ,-',
  },
  {
    text: '2 osoby',
    price: '1700 ,-',
  },
  {
    text: '3 osoby',
    price: '2100 ,-',
  },
  {
    text: '',
    price: '',
  },
  {
    text: '',
    price: '',
  },
  {
    text: 'Kredity',
    price: '',
  },
  {
    text: '1000 kredit',
    price: '1000 ,-',
  },
  {
    text: '2000 kredit',
    price: '1900 ,-',
  },
  {
    text: '3000 kredit',
    price: '2800 ,-',
  },
  {
    text: '4000 kredit',
    price: '3650 ,-',
  },
];

const Pricing = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/barre.jpg" title="Ceník" page="03" id="Cenik">
      <div className="flex flex-col h-full justify-center  my-4 gap">
        {itemsNew.map(({ text, price }, i) => (
          <div className={cn('grid grid-cols-[1fr_auto] gap-32 me-2 md:me-4 lg:me-6 xl:me-16')} key={text}>
            {text ? (
              <>
                <Typography variant="h5" className="uppercase">
                  {text}
                </Typography>
                <Typography variant="h5">{price}</Typography>
              </>
            ) : (
              <div className="h-6" />
            )}
          </div>
        ))}
      </div>
    </LecturePage>
  );
};

export default Pricing;
