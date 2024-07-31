import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const FirstPage = () => {
  const variableHeader = `text-[20px] sm:text-[24px] md:text-[30px]`;

  return (
    <Section className=" md:grid md:grid-cols-2 text-primary">
      <div className="relative min-h-[50vh]">
        <Image
          src="/other/curtain.jpg"
          width={1024}
          height={1024}
          alt="Vase background"
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[85%] w-[90%] opacity-90 object-cover"
        />
        <Image
          src="/bg_logo.svg"
          alt="Logo"
          width={608}
          height={450}
          className="w-[300px] h-[450px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Typography variant="h3" className={cn('absolute top-0 left-10 uppercase', variableHeader)}>
          Veleslavínova 4
        </Typography>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute h-[85%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col xl:flex-row justify-around uppercase p-4 flex-wrap gap-4">
            <a href="#Lekce">
              <Typography variant="h4">Lekce</Typography>
            </a>
            <a href="#Lektori">
              <Typography variant="h4">Lektoři</Typography>
            </a>
            <Typography variant="h4">Rozvrh lekcí</Typography>
            <a href="#Kontakty">
              <Typography variant="h4">Kontakty</Typography>
            </a>
          </div>
          <div className="absolute flex flex-col gap-4 p-0 xl:p-16  bottom-0 left-0 items-start xl:items-center justify-center uppercase">
            <a href="#Cenik">
              <Typography variant="h4">Ceník</Typography>
            </a>
            <a href="#Workshopy">
              <Typography variant="h4">Workshopy</Typography>
            </a>
            <a href="#Blog">
              <Typography variant="h4">Blog</Typography>
            </a>
            <a href="#Galerie">
              <Typography variant="h4">Galerie</Typography>
            </a>
          </div>

          {/* <Image
            src="/other/decor.jpg"
            width={1024}
            height={1024}
            alt="Decor background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover -z-10"
          /> */}
          {/* <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-60 -z-10" /> */}
        </div>
        <div className="flex md:hidden  flex-col justify-around uppercase p-4 flex-wrap gap-4">
          <a href="#Lekce">
            <Typography variant="h4">Lekce</Typography>
          </a>
          <a href="#Lektori">
            <Typography variant="h4">Lektoři</Typography>
          </a>
          <Typography variant="h4">Rozvrh lekcí</Typography>
          <a href="#Kontakty">
            <Typography variant="h4">Kontakty</Typography>
          </a>
          <hr />
          <a href="#Cenik">
            <Typography variant="h4">Ceník</Typography>
          </a>
          <a href="#Workshopy">
            <Typography variant="h4">Workshopy</Typography>
          </a>
          <a href="#Blog">
            <Typography variant="h4">Blog</Typography>
          </a>
          <a href="#Galerie">
            <Typography variant="h4">Galerie</Typography>
          </a>
        </div>
      </div>
      <Image src="/bg.jpg" alt="Background" className="absolute top-0 left-0 object-cover h-full w-full -z-20" width={1232} height={928} />
      <div className="bg-white absolute top-0 left-0 w-full h-full opacity-50 -z-20" />
    </Section>
  );
};

export default FirstPage;
