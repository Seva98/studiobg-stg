import Posts from '@/components/posts';

const Workshopy = () => {
  return (
    <Posts
      header="Workshopy"
      className="bg-secondary"
      pageNumber="05.b"
      posts={[
        {
          title: 'Dlouhy nazev workshopu',
          image: '/person/lenka.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          title: 'Post 2',
          image: '/person/tereza.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          title: 'Post 3',
          image: '/person/kristyna.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          title: 'Post 4',
          image: '/person/marie.jpeg',
          href: '/blog/vitame-vas',
        },
      ]}
    />
  );
};

export default Workshopy;
