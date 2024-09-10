export const generateDate = () =>
  new Date(Math.random() * 100000000000 + 19999999999999)
    .toISOString()
    .substring(0, 16)
    .replace("T", " ");
