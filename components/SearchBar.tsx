'use client';

import { ChangeEvent, useState } from 'react';

type Props = {
  filterPost: (keyword: string) => void;
};

const SearchBar = ({ filterPost }: Props) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    filterPost(e.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search Post...'
      className='mx-auto mb-2 block w-full max-w-3xl rounded-md border-none bg-default-light p-2 text-font-light outline-none transition-colors duration-100 dark:bg-default-dark dark:text-font-dark'
      value={keyword}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
