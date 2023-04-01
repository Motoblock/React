import React, { useEffect, useRef, useState } from 'react';

import { Search } from './../../component/UI/input/Search';
import { CardList } from './../../component/CardList';
import { ICardCatProps } from './../../component/UI/card/types';
import { SERVER_LINK } from '../../component/util/variable';
import './../main/main.module.css';

export function Main() {
  const [search, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [items, setItems] = useState([]);
  const inputRef = useRef(search);

  const getData = async () => {
    const response = await fetch(`${SERVER_LINK}/catalog`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Could not fetch the data from the resourse');

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getData().then((data) => {
      setItems(data);
    });
  }, []);

  useEffect(() => {
    inputRef.current = search;

    // getData().then((data) => {
    //   // console.log('data', data);
    //   setItems(data);
    // });
    // console.log(items);
    setItems(
      items.filter((el: ICardCatProps) => {
        console.log('el[0]', el);
        el.breed.toLowerCase().includes(search.toLowerCase());
      })
    );
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
