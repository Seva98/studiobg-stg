import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';

const FirstPage = () => {
  return (
    <Section className="grid grid-cols-2 text-primary">
      <div className="relative">
        <Image
          src="/other/curtain.jpg"
          width={1024}
          height={1024}
          alt="Vase background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[85%] w-[90%] object-cover"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          width={608}
          height={450}
          className="w-[300px] h-[450px] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Typography variant="h1" className="absolute top-o left-0 uppercase">
          Veleslavínova 4
        </Typography>
      </div>
      <div className="relative">
        <div className="absolute h-[85%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-around uppercase p-4 flex-wrap gap-4">
            <Typography variant="h3">Lekce</Typography>
            <Typography variant="h3">Lektoři</Typography>
            <Typography variant="h3">Rozvrh lekcí</Typography>
            <Typography variant="h3">Kontakty</Typography>
          </div>
          <div className="absolute flex flex-col gap-4 p-16  bottom-0 left-0 items-center justify-center uppercase">
            <Typography variant="h3">Workshopy</Typography>
            <Typography variant="h3">Blog</Typography>
            <Typography variant="h3">Galerie</Typography>
          </div>
          <Image
            src="/other/decor.jpg"
            width={1024}
            height={1024}
            alt="Decor background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover -z-10"
          />
          <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full opacity-60 -z-10" />
        </div>
      </div>
      <Image src="/bg.jpg" alt="Background" className="absolute top-0 left-0 object-cover h-full w-full -z-20" width={1232} height={928} />
      <div className="bg-white absolute top-0 left-0 w-full h-full opacity-50 -z-20" />
    </Section>
  );
};

export default FirstPage;
