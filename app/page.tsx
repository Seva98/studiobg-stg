import FacebookIcon from '@/components/icons/facebook';
import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { Playfair_Display, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
const playfairDisplay = Playfair_Display({
  weight: '400', // Adjust the weight as needed
  style: 'normal', // Adjust the style as needed
  subsets: ['latin'], // Adjust the subsets as needed
});
export default function Home() {
  return (
    <main className={cn('flex min-h-screen  flex-col items-center justify-between p-24 relative text-primary', poppins.className)}>
      <Typography className="uppercase text-center text-3xl font-semibold">
        <>
          Balance &<br />
          Glow Studio
        </>
      </Typography>
      <Typography className={cn('text-[6rem] leading-none text-center', playfairDisplay.className)}>
        Launching
        <br />
        Soon!
      </Typography>
      <Typography className="text-2xl">We are currently making some improvments to the website!</Typography>
      <div className="flex gap-4">
        <Button variant="ghost" className="p-2">
          <Link href="https://www.instagram.com/balance_glow_studio" className="w-8 h-8" target="_blank">
            <InstagramLogoIcon />
          </Link>
        </Button>
        <Button variant="ghost" className="p-2">
          <Link href="https://www.facebook.com/share/UCoQMtkUQfmBvqex/?mibextid=LQQJ4d" className="w-8 h-8" target="_blank">
            <FacebookIcon />
          </Link>
        </Button>
      </div>
      <Image src="/bg.jpg" alt="Background" className="absolute top-0 left-0 object-cover h-full w-full -z-10" width={1232} height={928} />
      <div className="bg-white absolute top-0 left-0 w-full h-full opacity-50 -z-10" />
    </main>
  );
}
