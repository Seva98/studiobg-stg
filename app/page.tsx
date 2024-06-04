import { Poppins } from 'next/font/google';
import FirstPage from './firstPage';
import { cn } from '@/lib/utils';
import Classes from './classes';
import Pilates from './pilates';
import Pilates2 from './pilates2';
import Reformer from './reformer';
import Barre from './barre';
import Yoga from './yoga';
import Lectors from './lectors';
import Contacts from './contacts';
import Blog from './blog';
import Workshopy from './workshops';
import Gallery from './gallery';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={cn(poppins.className)}>
      <FirstPage />
      <Classes />
      <Pilates />
      <Pilates2 />
      <Reformer />
      <Barre />
      <Yoga />
      <Lectors />
      <Contacts />
      <Blog />
      <Workshopy />
      <Gallery />
    </main>
  );
}
