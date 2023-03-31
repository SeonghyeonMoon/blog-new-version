import type { TagType } from '@/types/post';

type Props = {
  tagList: TagType[];
};

const TagList = ({ tagList }: Props) => {
  return (
    <ul className='flex gap-1'>
      {tagList.map(({ id, color, name }) => (
        <li
          key={id}
          className={`rounded-sm px-1.5 py-px text-sm text-font-light dark:text-font-dark bg-${color}-light dark:bg-${color}-dark transition-background-colors transition-colors duration-200`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
