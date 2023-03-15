import '@testing-library/react';

describe('work local storage', () => {
  test('read and write app storage functions', () => {
    const testValue = 'test';

    const setMock = jest.spyOn(Storage, 'set');

    expect(getTestValue).toEqual(testValue);
    expect(setMock).toHaveBeenCalledTimes(1);
  });
});
