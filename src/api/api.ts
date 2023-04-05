import { SERVER_LINK } from './../component/util/variable';

export const getCatFetch = async (search: string) => {
  const path = `${SERVER_LINK}/catalog?q=${search}`;

  const res = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
