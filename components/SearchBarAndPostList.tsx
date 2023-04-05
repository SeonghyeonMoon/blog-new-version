'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import PostList from './PostList';
import type { PostType } from '@/types/post';

type Props = {
  postList: PostType[];
};

const SearchBarAndPostList = ({ postList }: Props) => {
  const [filteredPostList, setFilteredPostList] = useState<PostType[]>(postList);

  const filterPost = (keyword: string) => {
    setFilteredPostList(postList.filter(({ title }) => title.includes(keyword)));
  };

  return (
    <>
      <SearchBar filterPost={filterPost} />
      <PostList postList={filteredPostList} />
    </>
  );
};

export default SearchBarAndPostList;
