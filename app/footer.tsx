import Link from 'next/link';

const Footer = () => {
  return (
    <div className="p-16 bg-secondary text-center text-primary/50 text-sm">
      © {new Date().getFullYear()} All rights reserved
      <br />
      Balance & Glow Studio
      <br />
      Made by <Link href="https://resume.sevcik.dev">sevcik.dev</Link>
    </div>
  );
};

export default Footer;
