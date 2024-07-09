import Section from './ui/section';
import Typography from './ui/typography';
import { cn } from '@/lib/utils';
import GridList, { Item } from './gridList';
import PageNumber from './pageNumber';

const Posts = ({ header, className, posts, pageNumber }: { header: string; className: string; posts: Item[]; pageNumber: string }) => {
  return (
    <Section className={cn('flex flex-col', className)} padding="lg" id={header}>
      <Typography variant="h1" className="text-center uppercase flex-shrink">
        {header}
      </Typography>
      <GridList items={posts} />
      <PageNumber page={pageNumber} />
    </Section>
  );
};

export default Posts;
