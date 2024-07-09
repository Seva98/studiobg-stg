import Posts from '@/components/posts';

const Blog = () => {
  return (
    <Posts
      header="Blog"
      className="bg-ternary"
      pageNumber="05.a"
      posts={[
        {
          title: 'Vítame Vás',
          image: '/person/lenka.jpeg',
          href: '/blog/vitame-vas',
        },
      ]}
    />
  );
};

export default Blog;
