import { BlockType } from '@/types/block';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  block: BlockType;
};

const CodeBlock = ({ block }: Props) => {
  return (
    <SyntaxHighlighter
      language={block.language}
      style={monokai}
      customStyle={{
        borderRadius: '0.2rem',
      }}
      className='my-4'
    >
      {block.code || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
