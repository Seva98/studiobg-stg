import Image from 'next/image';
import Section from './ui/section';
import Typography from './ui/typography';

type Post = {
  title: string;
  image: string;
};

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <Section className="bg-secondary flex flex-col" padding="lg">
      <Typography variant="h1" className="text-center uppercase flex-shrink">
        Blog
      </Typography>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(({ image, title }, i) => (
          <div key={`post-${i}`} className="relative">
            <Image src={image} alt={title} className="w-full object-cover" width={600} height={400} />
            <Typography
              variant="h4"
              className="p-6 uppercase text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary w-[101%]"
            >
              {title}
            </Typography>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Posts;
