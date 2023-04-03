import { getPostList } from '@/service/post';
import Banner from '@/components/Banner';
import PostList from '@/components/PostList';

export const revalidate = 3600;

const HomePage = async () => {
  const data = await getPostList();

  return (
    <>
      <Banner />
      <PostList postList={data} />
    </>
  );
};

export default HomePage;
