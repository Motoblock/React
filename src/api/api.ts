import { SERVER_LINK } from './../component/util/variable';
import { ICardCatProps } from './../component/UI/card/types';

export const getCatFetch = async (search: string) => {
  let path = `${SERVER_LINK}/catalog?q=${search}`;

  if (!search) path = `${SERVER_LINK}/catalog`;

  const res = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const getCatOne = async (id: number) => {
  const res = await fetch(`${SERVER_LINK}/catalog?id=${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const getCatFetchServer = (callback: (apiResult: ICardCatProps[]) => void) => {
  const path = `${SERVER_LINK}/catalog`;

  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch(() => callback([]));
};
