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

export default function Home() {
  return (
    <main>
      <Classes />
      <Pilates />
      <Pilates2 />
      <Reformer />
      <Barre />
      <Yoga />
      <Lectors />
      <Pricing />
      <Contacts />
      <Blog />
      <Workshopy />
      <Gallery />
    </main>
  );
}
