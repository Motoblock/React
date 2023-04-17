import React, { useEffect } from 'react';

import { fetchCards, setSearch } from './../../store/cardSlice';
import { Search } from './../../component/UI/input/Search';
import { CardList } from './../../component/CardList';
import style from './../main/main.module.css';
import { Button } from './../../component/UI/button/Button';
import { useAppDispatch, useAppSelector } from './../../store/hooksRedux';

export function Main() {
  const dispatch = useAppDispatch();
  const { isLoading, isError, search, items } = useAppSelector((state) => state.card);

  const error = <h2 className="message_wait loader">I&apos;m sorry, but Error server (((</h2>;

 useEffect(() => {
    if (items.length === 0) dispatch(fetchCards());
  }, [dispatch, items.length]);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldValue = e.target.value;
    dispatch(setSearch(searchFieldValue));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchCards());
  };

  return (
    <>
      <h2>Find yourself a fuzzy</h2>
      <form onSubmit={handleFormSubmit} className={style.form_search}>
        <Search value={search} onChange={handelChange} />
        <Button> Search </Button>
      </form>
      {isLoading && <div className="message_wait loader"></div>}
      {isError ? error : <CardList />}
    </>
  );
}
