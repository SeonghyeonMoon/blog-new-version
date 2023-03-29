import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type BlockType = {
  id: string;
  type: string;
  text: RichTextItemResponse[];
  children?: BlockType[];
  code?: string;
  url?: string;
  language?: string;
  caption?: string;
  title?: string;
  description?: string;
  favicon?: string;
  image?: string;
};
