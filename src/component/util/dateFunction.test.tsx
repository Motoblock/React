import { describe, it } from 'vitest';

import { datediff } from './dateFunction';

describe('main', () => {
  it('age calculation, should return the number of months', () => {
    const month = datediff(new Date('2022-12-01'));

    expect(month).toBe(4);
  });
});
