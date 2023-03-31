import React, { useEffect, useRef, useState } from 'react';

import { Search } from './../../component/UI/input/Search';
import { CardList } from '../../component/CardList';
import catsData from './../../assets/data/cats';
import './../main/main.module.css';

export function Main() {
  const [search, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [items, setItems] = useState(catsData);
  const inputRef = useRef(search);

  useEffect(() => {
    inputRef.current = search;
    setItems(catsData.filter((el) => el.breed.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInput', inputRef.current);
    };
  }, []);

  return (
    <>
      <h2>Find yourself a fuzzy</h2>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <CardList items={items} />
    </>
  );
}
