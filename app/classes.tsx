import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

const Classes = () => {
  return (
    <Section className="bg-ternary grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-12" id="Lekce">
      <div className="flex flex-col gap-16 uppercase justify-center">
        {/* <Typography variant="h2" className="pl-8">
          01
        </Typography> */}
        <Typography variant="h1">Lekce</Typography>
        <div className="flex flex-col pl-8">
          <Link href="/reformer#Reformer">
            <Typography variant="h3">Reformer</Typography>
          </Link>
          <Link href="/barre#Barre">
            <Typography variant="h3">Barre</Typography>
          </Link>
          <Link href="/pilates#Pilates">
            <Typography variant="h3">Pilates</Typography>
          </Link>
          <Link href="/yoga#Yoga">
            <Typography variant="h3">Yoga</Typography>
          </Link>
        </div>
        {/* <a href="#Workshopy">
          <Typography variant="h2" className="pl-8">
            Workshopy
          </Typography>
        </a>
        <Typography variant="h1" className="pl-8">
          Rozvrh
        </Typography> */}
      </div>
      <div>
        <Image src="/other/studio.jpg" width={928} height={1232} alt="Studio" className="min-h-[90vh] relative -top-6  object-cover  overflow-hidden" />
      </div>
    </Section>
  );
};

export default Classes;
