import { Poppins } from 'next/font/google';
import FirstPage from './firstPage';
import { cn } from '@/lib/utils';
import Classes from './classes';
import Pilates from './pilates';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className={cn(poppins.className)}>
      <FirstPage />
      <Classes />
      <Pilates />
    </main>
  );
}
