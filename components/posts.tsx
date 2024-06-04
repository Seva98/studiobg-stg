import Section from './ui/section';
import Typography from './ui/typography';
import { cn } from '@/lib/utils';
import GridList, { Item } from './gridList';

const Posts = ({ header, className, posts }: { header: string; className: string; posts: Item[] }) => {
  return (
    <Section className={cn('flex flex-col', className)} padding="lg" id={header}>
      <Typography variant="h1" className="text-center uppercase flex-shrink">
        {header}
      </Typography>
      <GridList items={posts} />
    </Section>
  );
};

export default Posts;
