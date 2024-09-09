import LecturePage from '@/components/lecturePage';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const items = [
  {
    text: 'Pilates, yoga',
    price: '200 ,-',
  },
  {
    text: '',
    price: '',
  },
  {
    text: 'Barre',
    price: '220 ,-',
  },
  {
    text: '',
    price: '',
  },
  {
    text: 'Reformer',
    price: '400 ,-',
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
    text: '',
    price: '',
  },
  // {
  //   text: "Víkend barre 75'",
  //   price: '300 ,-',
  // },
  // {
  //   text: '',
  //   price: '',
  // },
  // {
  //   text: '2000 kredit',
  //   price: '1900 ,-',
  // },
  // {
  //   text: '3000 kredit',
  //   price: '2800 ,-',
  // },
  // {
  //   text: '4000 kredit',
  //   price: '3650 ,-',
  // },
  // {
  //   text: '',
  //   price: '',
  // },
  {
    text: 'Individuální lekce reformer:',
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
];
// const items = [
//   {
//     text: 'Pilates, yoga',
//     price: '250 ,-',
//   },
//   {
//     text: 'Barre',
//     price: '280 ,-',
//   },
//   {
//     text: 'Reformer',
//     price: '600 ,-',
//   },
//   {
//     text: '',
//     price: '',
//   },
//   {
//     text: "Víkend barre 75'",
//     price: '300 ,-',
//   },
//   {
//     text: '',
//     price: '',
//   },
//   {
//     text: '2000 kredit',
//     price: '1900 ,-',
//   },
//   {
//     text: '3000 kredit',
//     price: '2800 ,-',
//   },
//   {
//     text: '4000 kredit',
//     price: '3650 ,-',
//   },
//   {
//     text: '',
//     price: '',
//   },
//   {
//     text: 'Individuální lekce reformer:',
//     price: '',
//   },
//   {
//     text: '1 osoba',
//     price: '1000 ,-',
//   },
//   {
//     text: '2 osoby',
//     price: '1700 ,-',
//   },
//   {
//     text: '3 osoby',
//     price: '2100 ,-',
//   },
// ];

const Pricing = () => {
  return (
    <LecturePage className="bg-ternary" image="/other/barre.jpg" title="Ceník" page="03" id="Cenik">
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

export default Pricing;
