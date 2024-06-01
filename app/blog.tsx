import Posts from '@/components/posts';

const Blog = () => {
  return (
    <Posts
      posts={[
        {
          title: 'Dlouhy nazev clanku o spusteni blogu',
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

export default Blog;
