import { SERVER_LINK } from './../component/util/variable';

export const getCatFetch = async (search: string, id?: number)  => {
 
  let path = `${SERVER_LINK}/catalog?q=${search}`;
  console.log(path, 'id', id); 
  if(search === undefined) path = `${SERVER_LINK}/catalog`;
  if(id) path = `${SERVER_LINK}/catalog?id=${id}`;    
  console.log(path); 
  const res = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
