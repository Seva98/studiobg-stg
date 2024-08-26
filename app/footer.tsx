import Typography from '@/components/ui/typography';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="p-16 bg-orange-50 text-center text-primary/50 text-sm">
      <Link href="/provozni-rad#article">
        <Typography variant="h4" className="uppercase">
          Provozní řád
        </Typography>
      </Link>
      <hr className="my-8" />© {new Date().getFullYear()} All rights reserved
      <br />
      Balance & Glow Studio
      <br />
      Made by <Link href="https://resume.sevcik.dev">sevcik.dev</Link>
    </div>
  );
};

export default Footer;
