import Block from '@/components/Block';
import Header from '@/components/Header';
import TagList from '@/components/TagList';
import { getBlockList, getPost, getPostList } from '@/service/post';

type Props = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: Props) {
  const { title, tagList } = await getPost(params.id);
  const blockList = await getBlockList(params.id);

  return (
    <>
      <Header pathname='post' />
      <main className='mx-auto max-w-3xl'>
        <div className='flex flex-col items-center justify-center gap-2 border-b border-hr-light py-5 dark:border-hr-dark'>
          <TagList tagList={tagList} />
          <h2 className='text-xl'>{title}</h2>
        </div>
        {blockList.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </main>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { title } = await getPost(params.id);
  return { title };
}

export async function generateStaticParams() {
  const postList = await getPostList();
  return postList.map((post) => ({ id: post.id }));
}
