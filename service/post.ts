import { Client, isFullPage } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Post } from '@/types/post';

const getPostOrder = (page: PageObjectResponse): number => {
  return (page.properties.order.type === 'number' && page.properties.order.number) || Infinity;
};

const byPublic = (page: PageObjectResponse): boolean => {
  return page.properties.public.type === 'checkbox' && page.properties.public.checkbox;
};

const byOrder = (a: PageObjectResponse, b: PageObjectResponse): number => {
  return getPostOrder(a) - getPostOrder(b);
};

const convertPost = (page: PageObjectResponse): Post => {
  return {
    id: page.id,
    title: page.properties.name.type === 'title' ? page.properties.name.title[0].plain_text : '',
    tagList: page.properties.tags.type === 'multi_select' ? page.properties.tags.multi_select : [],
  };
};

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getPostList = async (): Promise<Post[]> => {
  if (!process.env.NOTION_DATABASE_ID) throw new Error('NOTION_DATABASE_ID is not defined.');
  const { results } = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
  return results.filter(isFullPage).filter(byPublic).sort(byOrder).map(convertPost);
};
