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
    <div className="flex flex-col gap-16 mb-auto items-end ">
      <Image src={image} alt="Lektoři" width={400} height={400} className="w-full object-cover aspect-square rounded-full h-fit p-8" />
      <Typography variant="h2" className="text-center uppercase">
        {name}
      </Typography>
      <Typography variant="lead" className="text-center">
        {text}
      </Typography>
    </div>
  );
};
export default Person;
