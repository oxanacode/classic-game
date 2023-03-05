export const splitTime = (minutes: number) => {
  const arr = String(minutes).split('');

  while (arr.length < 3) {
    arr.unshift('0');
  }

  return arr;
};
