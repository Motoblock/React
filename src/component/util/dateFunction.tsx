export const datediff = (first: Date) => {
  if (!first) return 0;
  return Math.trunc((Number(new Date()) - Number(first)) / (1000 * 60 * 60 * 24 * 30));
};
