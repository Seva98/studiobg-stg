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
        },
        {
          image: '/foto/276A7539.jpg',
        },
        {
          image: '/foto/276A7523.jpg',
        },
        {
          image: '/foto/276A7482.jpg',
        },
        {
          image: '/foto/276A7519.jpg',
        },
        {
          image: '/foto/276A7450.jpg',
        },
      ]}
    />
  );
};

export default Gallery;
