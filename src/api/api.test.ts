import { vi } from 'vitest';
import { getCatFetch } from './api';

it('calls the right route', async () => {
  const mockCat = { id: 1, name: 'Бенедикт', breed: 'Абиссинская', price: 2000 };
  const Respons = Promise.resolve(mockCat);
  const mockFetch = Promise.resolve({
    json: () => Respons,
  });
  global.fetch = vi.fn().mockImplementation(() => mockFetch);
  vi.spyOn(global, 'fetch');
  await getCatFetch('');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

it('calls the right route', async () => {
  const getCatFetch = vi.fn(() => true);
  getCatFetch();
  expect(getCatFetch).toHaveReturned();
});

it('getDataCat returns a product object', async () => {
  const mockCat = { id: 1, name: 'Бенедикт', breed: 'Абиссинская', price: 2000 };
  const Respons = Promise.resolve(mockCat);
  const mockFetch = Promise.resolve({
    json: () => Respons,
  });
  global.fetch = vi.fn().mockImplementation(() => mockFetch);

  const cat = await getCatFetch('');
  expect(typeof cat).toBe('object');
  expect(cat).toHaveProperty('id');
  expect(cat).toHaveProperty('name');
  expect(cat).toHaveProperty('breed');
  expect(cat).toHaveProperty('price');
});
