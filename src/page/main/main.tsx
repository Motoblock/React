import React, { useEffect, useRef, useState } from 'react';

import { Search } from './../../component/UI/input/Search';
import { CardList } from '../../component/CardList';
import catsData from './../../assets/data/cats';
import './../main/main.module.css';

export function Main() {
  // localStorage.getItem('searchInput') ? localStorage.getItem('searchInput') :
  const [search, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [items, setItems] = useState(catsData);
  const inputRef = useRef(search);
  const inputRef2 = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current = search;
    setItems(catsData.filter((el) => el.breed.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  useEffect(() => {
    return () => {
      if (inputRef.current) localStorage.setItem('searchInput', inputRef.current);
    };
  }, []);

  return (
    <>
      <h2>Find yourself a fuzzy</h2>
      <Search ref1={inputRef2} value={search} onChange={(e) => setSearch(e.target.value)} />
      <CardList items={items} />
    </>
  );
}
