import { SERVER_LINK } from './../component/util/variable';

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
