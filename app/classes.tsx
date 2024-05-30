import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';

const Classes = () => {
  return (
    <Section className="bg-secondary grid grid-cols-[4fr_2fr] gap-4">
      <div className="flex flex-col gap-16 uppercase justify-center">
        <Typography variant="h2" className="pl-8">
          01
        </Typography>
        <Typography variant="h1">Lekce</Typography>
        <div className="flex flex-col pl-8">
          <Typography variant="h3">Pilates</Typography>
          <Typography variant="h3">Reformer</Typography>
          <Typography variant="h3">Barre</Typography>
          <Typography variant="h3">Yoga</Typography>
        </div>
        <Typography variant="h2" className="pl-8">
          Workshopy
        </Typography>
        <Typography variant="h1" className="pl-8">
          Rozvrh
        </Typography>
      </div>
      <div>
        <Image src="/other/studio.jpg" width={928} height={1232} alt="Studio" className="min-h-[90vh] relative -top-6  object-cover " />
      </div>
    </Section>
  );
};

export default Classes;
