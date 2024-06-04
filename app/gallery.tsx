import Posts from '@/components/posts';

const Gallery = () => {
  return (
    <Posts
      header="Galerie"
      className="bg-ternary"
      posts={[
        {
          image: '/person/lenka.jpeg',
        },
        {
          image: '/person/tereza.jpeg',
        },
        {
          image: '/person/kristyna.jpeg',
        },
        {
          image: '/person/marie.jpeg',
        },
      ]}
    />
  );
};

export default Gallery;
