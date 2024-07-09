import Contacts from '@/app/contacts';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-secondary relative">
      <Link href="/" className="flex gap-1 items-center absolute left-2 top-4 text-primary">
        <ArrowLeftIcon /> Hlavní stránka
      </Link>
      <div className="mx-auto py-24 max-w-screen-sm">
        <div className="flex gap-1 flex-col flex-grow bg-orange-50 p-8 shadow-md border border-gray-200 h-full">{children}</div>
      </div>
      <Contacts />
    </main>
  );
}
