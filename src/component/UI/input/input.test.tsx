import '@testing-library/react';
import { jest } from '@jest/globals';

describe('work local storage', () => {
  test('read and write app storage functions', () => {
    const setStorage = (value: string): void => {
      localStorage.setItem('searchInput', value);
    };
    const getStorage = () => {
      return localStorage.getItem('searchInput');
    };
    const LStorage = {
      set: setStorage,
      get: getStorage,
    };

    const testValue = 'catcatcat';

    const setMock = jest.spyOn(LStorage, 'set');
    const getMock = jest.spyOn(LStorage, 'get');

    LStorage.set(testValue);
    const getTestValue = LStorage.get();

    expect(getTestValue).toEqual(testValue);
    expect(setMock).toHaveBeenCalledTimes(1);
    expect(getMock).toHaveBeenCalledTimes(1);
  });
});
