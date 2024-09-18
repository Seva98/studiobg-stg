import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Slideshow from './slideshow';

type Link = {
  href: string;
  text: string;
};

type GroupedLinks = {
  href: string;
  text: string;
  children?: Link[];
  desc?: string;
};

const links: GroupedLinks[] = [
  {
    href: '/#Lekce',
    text: 'Lekce',
  },
  {
    href: '/rozvrh#zenamu-calendar',
    text: 'Rozvrh lekcí',
  },
  {
    href: '/workshopy#zenamu-workshops',
    text: 'Workshopy',
  },
  {
    href: '/cenik#Cenik',
    text: 'Ceník',
    desc: 'Zvýhodněné ceny lekcí pouze do 13. října.',
  },
  // {
  //   href: '/#Lektori',
  //   text: 'Lektoři',
  // },
  {
    href: '/#Kontakty',
    text: 'Kontakty',
  },
  {
    href: '/#Blog',
    text: 'Blog',
  },
  {
    href: '/#Galerie',
    text: 'Galerie',
  },
];

const FirstPage = () => {
  const variableHeader = `text-[20px] sm:text-[24px] md:text-[30px]`;

  return (
    <Section className=" md:grid md:grid-cols-2 text-primary bg-secondary">
      <div className="relative min-h-[25vh] sm:min-h-[50vh] md:me-8">
        <Slideshow />
        {/* <Image
          src="/other/curtain.jpg"
          width={1024}
          height={1024}
          alt="Vase background"
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[85%] w-[90%] opacity-90 object-cover"
        /> */}
        {/* <Image
          src="/bg_logo.svg"
          alt="Logo"
          width={608}
          height={450}
          className="w-[300px] h-[450px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        /> */}
        <Link href="/" className="flex gap-0 sm:gap-4 absolute top-0 left-10 items-center flex-col md:flex-row">
          <Image src="/bg_logo_invis_2.svg" alt="Logo" width={80} height={120} className="w-[80px] h-[120px] object-contain" />
          <Typography variant="h3" className={cn('whitespace-nowrap uppercase mt-0 sm:mt-4', variableHeader)}>
            Veleslavínova 4
          </Typography>
        </Link>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-4  border-l-4 border-[#68443c] p-4 absolute sm:top-[8rem]">
          {links.map(({ href, text, desc }) => (
            <div key={`div-${href}`} className="flex flex-col">
              <Link href={href} key={`link-${href}`}>
                <Typography variant="h4" className="uppercase">
                  {text}
                </Typography>
              </Link>
              {desc && <Typography variant="small">{desc}</Typography>}
            </div>
          ))}
        </div>
        {/* <div className="hidden md:block absolute h-[85%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col xl:flex-row justify-around uppercase p-4 flex-wrap gap-4">
            <Link href="/#Lekce">
              <Typography variant="h4">Lekce</Typography>
            </Link>
            <Link href="/#Lektori">
              <Typography variant="h4">Lektoři</Typography>
            </Link>
            <Typography variant="h4">Rozvrh lekcí</Typography>
            <Link href="/#Kontakty">
              <Typography variant="h4">Kontakty</Typography>
            </Link>
          </div>
          <div className="absolute flex flex-col gap-4 p-0 xl:p-16  bottom-0 left-0 items-start xl:items-center justify-center uppercase">
            <Link href="/cenik#Cenik">
              <Typography variant="h4">Ceník</Typography>
            </Link>

            <Link href="/#Blog">
              <Typography variant="h4">Blog</Typography>
            </Link>
            <Link href="/#Galerie">
              <Typography variant="h4">Galerie</Typography>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden  flex-col justify-around uppercase p-4 flex-wrap gap-4">
          <Link href="/#Lekce">
            <Typography variant="h4">Lekce</Typography>
          </Link>
          <Link href="/#Lektori">
            <Typography variant="h4">Lektoři</Typography>
          </Link>
          <Typography variant="h4">Rozvrh lekcí</Typography>
          <Link href="/#Kontakty">
            <Typography variant="h4">Kontakty</Typography>
          </Link>
          <hr />
          <Link href="/cenik#Cenik">
            <Typography variant="h4">Ceník</Typography>
          </Link>

          <Link href="/#Blog">
            <Typography variant="h4">Blog</Typography>
          </Link>
          <Link href="/#Galerie">
            <Typography variant="h4">Galerie</Typography>
          </Link>
        </div> */}
      </div>
      <Image src="/bg.jpg" alt="Background" className="absolute top-0 left-0 object-cover h-full w-full -z-20" width={1232} height={928} />
      <div className="bg-white absolute top-0 left-0 w-full h-full opacity-50 -z-20" />
    </Section>
  );
};

export default FirstPage;
