import React, { useEffect, useRef, useState } from 'react';

import { Search } from './../../component/UI/input/Search';
import { CardList } from '../../component/CardList';
import catsData from './../../assets/data/cats';
import './../main/main.module.css';

export function Main() {
  // localStorage.getItem('searchInput') ? localStorage.getItem('searchInput') :
  const [search, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [items, setItems] = useState(catsData);
  const inputRef = useRef(null);

  useEffect(() => {
    setItems(catsData.filter((el) => el.breed.toLowerCase().includes(search.toLowerCase())));
    // inputRef.current = search;
    return () => {
      console.log(inputRef.current);
      // localStorage.setItem('searchInput', inputRef.current?.value[0]);
      if (search) {
        localStorage.setItem('searchInput', search);
      } else {
        localStorage.setItem('searchInput', '');
      }
    };
  }, [search]);

  return (
    <>
      <h2>Find yourself a fuzzy</h2>
      <Search ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} />
      <CardList items={items} />
    </>
  );
}
