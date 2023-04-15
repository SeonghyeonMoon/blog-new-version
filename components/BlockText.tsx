import { Fragment } from 'react';
import getAnnotateClassName from '@/utils/getAnnotateClassName';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type Props = {
  textList: RichTextItemResponse[];
};

const BlockText = ({ textList }: Props) => {
  return (
    <>
      {textList.map(({ href, plain_text, annotations }, index) => {
        if (href) {
          return (
            <a key={index} href={href} className='underline'>
              {plain_text}
            </a>
          );
        }


        const annotateClassName = getAnnotateClassName(annotations)
        if (annotateClassName) {
          return (
            <span key={index} className={annotateClassName}>
              {plain_text}
            </span>
          );
        }

        return <Fragment key={index}>{plain_text}</Fragment>;
      })}
    </>
  );
};

export default BlockText;
