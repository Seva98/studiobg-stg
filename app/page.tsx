import Classes from './classes';
import Pilates from './pilates';
import Pilates2 from './pilates2';
import Reformer from './reformer';
import Barre from './barre';
import Yoga from './yoga';
import Lectors from './lectors';
import Contacts from './contacts';
import Blog from './blog';
import Workshopy from './workshops';
import Gallery from './gallery';
import Pricing from './pricing';
import Calendar from './calendar';
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <Classes />
      {/* <Lectors /> */}
      <Blog />
      {/* <Workshopy /> */}
      <Gallery />
      <Contacts secondaryBg />
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {'send_to': 'AW-16679365058/B1DkCKi47dEZEMLTq5E-'});
        `}
      </Script>
    </main>
  );
}
