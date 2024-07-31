import Typography from './ui/typography';

const PageNumber = ({ page }: { page: string }) => {
  return null;

  return (
    <Typography variant="h2" className="absolute top-16 right-16">
      {page}
    </Typography>
  );
};

export default PageNumber;
