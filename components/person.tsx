import Image from 'next/image';
import Typography from './ui/typography';

export type PersonType = {
  image: string;
  name: string;
  text: string;
};

const Person = ({ person }: { person: PersonType }) => {
  const { image, name, text } = person;
  return (
    <div className="flex flex-col gap-4 sm:gap-8 md:gap-16 mb-auto max-w-sm flex-1">
      <Image src={image} alt="Lektoři" width={400} height={400} className="w-full object-cover aspect-square rounded-full h-fit p-8" />
      <Typography variant="h2" className="hidden lg:block text-center uppercase">
        {name}
      </Typography>
      <Typography variant="h4" className="block lg:hidden text-center uppercase">
        {name}
      </Typography>
      <Typography variant="lead" className="text-center">
        {text}
      </Typography>
    </div>
  );
};
export default Person;
