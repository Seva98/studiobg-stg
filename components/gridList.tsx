import Image from 'next/image';
import Typography from './ui/typography';
import Link from 'next/link';

export type Item = {
  title?: string;
  image: string;
  href: string;
};

const GridList = ({ items }: { items: Item[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 w-full flex-grow ">
      {items.map(({ image, title, href }, i) => (
        <div key={`post-${i}`} className="relative">
          <Link href={href}>
            <Image src={image} alt={title ?? `list-${i}`} className="w-full h-full object-cover aspect-square" width={600} height={400} />
            {title && (
              <Typography
                variant="h4"
                className="p-6 uppercase text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-[101%]"
              >
                {title}
              </Typography>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridList;
