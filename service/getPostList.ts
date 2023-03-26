import { isFullPage } from '@notionhq/client';
import { notion } from './notion';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Post } from '@/types/post';

function getPostOrder(page: PageObjectResponse): number {
  return (page.properties.order.type === 'number' && page.properties.order.number) || Infinity;
}

function byPublic(page: PageObjectResponse): boolean {
  return page.properties.public.type === 'checkbox' && page.properties.public.checkbox;
}

function byOrder(a: PageObjectResponse, b: PageObjectResponse): number {
  return getPostOrder(a) - getPostOrder(b);
}

function convertPost(page: PageObjectResponse): Post {
  return {
    id: page.id,
    title: page.properties.name.type === 'title' ? page.properties.name.title[0].plain_text : '',
    tags: page.properties.tags.type === 'multi_select' ? page.properties.tags.multi_select : [],
  };
}

export default async function getPostList(): Promise<Post[]> {
  if (!process.env.NOTION_DATABASE_ID) throw new Error('NOTION_DATABASE_ID is not defined.');
  const { results } = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });

  return results.filter(isFullPage).filter(byPublic).sort(byOrder).map(convertPost);
}
