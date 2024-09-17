import Contacts from '@/app/contacts';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" relative" id="article">
      <Link href="/" className="flex gap-1 items-center absolute left-2 top-4 text-primary">
        <ArrowLeftIcon /> Hlavní stránka
      </Link>
      <div>{children}</div>
      <Contacts secondaryBg />
    </main>
  );
}
