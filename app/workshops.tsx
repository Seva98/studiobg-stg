import Posts from '@/components/posts';

const Workshopy = () => {
  return (
    <Posts
      header="Workshopy"
      className="bg-ternary"
      posts={[
        {
          title: 'Dlouhy nazev workshopu',
          image: '/person/lenka.jpeg',
        },
        {
          title: 'Post 2',
          image: '/person/tereza.jpeg',
        },
        {
          title: 'Post 3',
          image: '/person/kristyna.jpeg',
        },
        {
          title: 'Post 4',
          image: '/person/marie.jpeg',
        },
      ]}
    />
  );
};

export default Workshopy;
