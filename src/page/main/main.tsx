import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFormSubmit } from './../../store/cardSlice';
import { Search } from './../../component/UI/input/Search';
import { CardList } from './../../component/CardList';
import { getCatFetch } from './../../api/api';
import style from './../main/main.module.css';
import { Button } from './../../component/UI/button/Button';
import { DELAY } from './../../component/util/variable';
import { ICardCatProps } from './../../component/UI/card/types';
interface ICardState {
  search: string;
  items: ICardCatProps[];
  isLoading: boolean;
  modal: ICardCatProps | null;
  isShow: boolean;
}

export function Main() {
  // const dispatch = useDispatch(handleFormSubmit());

  const cards = useSelector((state: ICardState) => state.items);
  console.log('cards', cards);
  const [search, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [items, setItems] = useState<ICardCatProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(search);

  const getData = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const data = await getCatFetch(search);
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }, DELAY);
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    inputRef.current = e.target.value;
  };

  // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   localStorage.setItem('searchInput', inputRef.current || '');
  //   getData();
  // };

  return (
    <>
      <h2>Find yourself a fuzzy</h2>
      <form onSubmit={handleFormSubmit} className={style.form_search}>
        <Search value={search} onChange={handelChange} />
        <Button> Search </Button>
      </form>
      {isLoading ? <div className="message_wait loader"></div> : <CardList items={items} />}
    </>
  );
}
