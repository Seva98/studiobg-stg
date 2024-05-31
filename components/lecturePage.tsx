import Image from 'next/image';
import Section from './ui/section';
import Typography from './ui/typography';
import { cn } from '@/lib/utils';
import PageNumber from './pageNumber';

const LecturePage = ({
  image,
  title,
  page,
  className,
  children,
}: {
  image: string;
  title: string;
  page: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Section className={cn('grid grid-cols-[4fr_5fr] gap-4 pt-16 pl-16', className)}>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-[4fr_1fr] flex-grow gap-4">
          <div className="flex flex-col gap-8">
            <Image src={image} alt={title} width={1114} height={1528} className="h-full object-cover" />
            <Typography variant="h1" className="flex-shrink-0 text-center uppercase">
              Rozvrh
            </Typography>
          </div>
          <Image src="/other/texture.jpg" alt="Texture" className="h-full object-cover pb-20" width={982} height={1232} />
        </div>
      </div>
      <div className="flex flex-col  relative">
        <Typography variant="h1" className="uppercase pt-4">
          {title}
        </Typography>
        {children}
      </div>
      <PageNumber page={page} />
    </Section>
  );
};

export default LecturePage;
