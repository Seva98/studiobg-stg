import Posts from '@/components/posts';

const Gallery = () => {
  return (
    <Posts
      header="Galerie"
      className="bg-ternary"
      pageNumber="05.c"
      posts={[
        {
          image: '/foto/276A7528.jpg',
          href: '',
        },
        {
          image: '/foto/276A7539.jpg',
          href: '',
        },
        {
          image: '/foto/276A7523.jpg',
          href: '',
        },
        {
          image: '/foto/276A7482.jpg',
          href: '',
        },
        {
          image: '/foto/276A7519.jpg',
          href: '',
        },
        {
          image: '/foto/276A7450.jpg',
          href: '',
        },
      ]}
    />
  );
};

export default Gallery;
