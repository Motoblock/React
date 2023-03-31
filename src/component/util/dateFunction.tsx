export const datediff = (first: Date) => {
  if (!first) first = new Date();
  return Math.trunc((Number(new Date()) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
};
