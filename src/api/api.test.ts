import { it, expect, vi } from 'vitest';
import { getCatFetch, getCatOne } from './api';
import { MOCK_PROPS } from './../component/util/variable';

it('calls the right route', async () => {
  const Respons = Promise.resolve(MOCK_PROPS);
  const mockFetch = Promise.resolve({
    json: () => Respons,
  });
  global.fetch = vi.fn().mockImplementation(() => mockFetch);

  await getCatFetch('');

  expect(global.fetch).toHaveBeenCalledTimes(1);
});

it('calls the right route', async () => {
  const getCatFetch = vi.fn(() => true);
  getCatFetch();
  expect(getCatFetch).toHaveReturned();
});

it('getCatFetch returns a product object', async () => {
  const Respons = Promise.resolve(MOCK_PROPS);
  const mockFetch = Promise.resolve({
    json: () => Respons,
  });
  global.fetch = vi.fn().mockImplementation(() => mockFetch);

  const cat = await getCatFetch('');
  expect(typeof cat).toBe('object');
});

it('getCatOne returns a product object', async () => {
  const mockCat = {
    id: 1,
    name: 'Бенедикт',
    breed: 'Абиссинская',
    price: 2000,
    cattery: 'Tany Mur',
    description:
      'Ласковый и игривый, умный и красивый. Любит играть, спать и кушать. Тянуться к человеку, очень любознателен. Будет всегда рядом, хороший помощник и верный друг.',
  };
  const Respons = Promise.resolve(mockCat);
  const mockFetchOne = Promise.resolve({
    json: () => Respons,
  });

  global.fetch = vi.fn().mockImplementation(() => mockFetchOne);

  const cat = await getCatOne(1);
  const json = await cat.json();

  expect(typeof cat).toBe('object');
  expect(json).toEqual(mockCat);
  expect(json).toHaveProperty('id');
  expect(json).toHaveProperty('name');
  expect(json).toHaveProperty('breed');
  expect(json).toHaveProperty('price');
});
