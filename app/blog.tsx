import Posts from '@/components/posts';

const Blog = () => {
  return (
    <Posts
      header="Blog"
      className="bg-secondary"
      pageNumber="05.a"
      posts={[
        {
          title: 'Vítame Vás',
          image: '/foto/276A7532.jpg',
          href: '/blog/vitame-vas#article',
        },
        {
          title: 'Barre',
          image: '/foto/276A7000.jpg',
          href: '/blog/barre#article',
        },
      ]}
    />
  );
};

export default Blog;
