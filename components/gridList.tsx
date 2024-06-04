import Image from 'next/image';
import Typography from './ui/typography';

export type Item = {
  title?: string;
  image: string;
};

const GridList = ({ items }: { items: Item[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full flex-grow">
      {items.map(({ image, title }, i) => (
        <div key={`post-${i}`} className="relative">
          <Image src={image} alt={title ?? `list-${i}`} className="w-full h-full object-cover" width={600} height={400} />
          {title && (
            <Typography
              variant="h4"
              className="p-6 uppercase text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-[101%]"
            >
              {title}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridList;
