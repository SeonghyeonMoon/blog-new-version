import { getPostList } from '@/service/post';
import Banner from '@/components/Banner';
import SearchBarAndPostList from '@/components/SearchBarAndPostList';

export const revalidate = 3600;

const HomePage = async () => {
  const postList = await getPostList();

  return (
    <>
      <Banner />
      <SearchBarAndPostList postList={postList} />
    </>
  );
};

export default HomePage;
