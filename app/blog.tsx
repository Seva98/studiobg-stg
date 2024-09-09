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
          title: 'Reformer',
          image: '/other/reformer.jpg',
          href: '/blog/reformer#article',
        },
        {
          title: 'Barre',
          image: '/foto/276A7000.jpg',
          href: '/blog/barre#article',
        },
        {
          title: 'Allegro 1',
          image: '/other/allegro-1.jpg',
          href: '/blog/allergo-1#article',
        },
        {
          title: 'Bala Heaven',
          image: '/foto/276A7607.jpg',
          href: '/blog/bala-heaven#article',
        },
        {
          title: 'Lota',
          image: '/other/lota.jpg',
          href: '/blog/lota#article',
        },
      ]}
    />
  );
};

export default Blog;
