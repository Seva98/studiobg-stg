export const isReleased = () => {
  const now = new Date().getTime();
  const releaseDate = new Date('2024-10-13T23:59:59.999+02:00').getTime();

  return now > releaseDate;
};
