import { PostType } from '@/types/post';
import TagList from './TagList';
import Link from 'next/link';

type Props = {
  postList: PostType[];
};

const PostList = ({ postList }: Props) => {
  return (
    <ul className='mx-auto max-w-3xl border-t border-hr-light transition-colors dark:border-hr-dark'>
      {postList.map(({ id, title, tagList }) => (
        <li key={id} className='border-b border-hr-light pt-3 pb-1 transition-colors dark:border-hr-dark'>
          <Link href={`/post/${id}`}>
            <TagList tagList={tagList} />
            <h3 className='mt-1 text-2xl'>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
