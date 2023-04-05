import { COUNT_SEC } from './variable';

export const datediff = (first: Date) => {
  return Math.trunc((Number(new Date()) - Number(first)) / COUNT_SEC);
};
