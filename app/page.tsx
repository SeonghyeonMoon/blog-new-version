import { getPostList } from '@/service/post';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import SearchBarAndPostList from '@/components/SearchBarAndPostList';

export const revalidate = 3600;

const HomePage = async () => {
  const postList = await getPostList();

  return (
    <>
      <Header pathname='home' />
      <Banner />
      <SearchBarAndPostList postList={postList} />
    </>
  );
};

export default HomePage;
