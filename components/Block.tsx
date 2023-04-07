import { BlockType } from '@/types/block';
import BlockText from './BlockText';

type Props = {
  block: BlockType;
};

export default function Block({ block }: Props) {
  switch (block.type) {
    case 'heading_1':
      return (
        <h1 className='border-b border-hr-light pt-4 pb-2 text-3xl dark:border-hr-dark'>
          <BlockText textList={block.text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className='border-b border-hr-light pt-3 pb-1 text-2xl dark:border-hr-dark'>
          <BlockText textList={block.text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className='border-b border-hr-light pt-2 pb-0.5 text-xl dark:border-hr-dark'>
          <BlockText textList={block.text} />
        </h3>
      );
    case 'paragraph':
      return (
        <p className='pt-1 pb-0.5'>
          <BlockText textList={block.text} />
        </p>
      );
    case 'bulleted_list':
      return (
        <ul className='list-inside list-disc pl-4'>
          {block.children?.map((child) => (
            <li key={child.id} className='pt-1 pb-0.5'>
              <BlockText textList={child.text} />
              {child.children?.map((grandChild) => (
                <Block block={grandChild} key={child.id} />
              ))}
            </li>
          ))}
        </ul>
      );
    case 'numbered_list':
      return (
        <ol className='list-inside list-decimal pl-4'>
          {block.children?.map((child) => (
            <li key={child.id} className='pt-1 pb-0.5'>
              <BlockText textList={child.text} />
              {child.children?.map((grandChild) => (
                <Block block={grandChild} key={child.id} />
              ))}
            </li>
          ))}
        </ol>
      );
    default:
      return <></>;
  }
}
