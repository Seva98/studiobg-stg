import Posts from '@/components/posts';

const Gallery = () => {
  return (
    <Posts
      header="Galerie"
      className="bg-ternary"
      pageNumber="05.c"
      posts={[
        {
          image: '/person/lenka.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          image: '/person/tereza.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          image: '/person/kristyna.jpeg',
          href: '/blog/vitame-vas',
        },
        {
          image: '/person/marie.jpeg',
          href: '/blog/vitame-vas',
        },
      ]}
    />
  );
};

export default Gallery;
