const getRandomColor = (alpha: number): string => {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const validAlpha = Math.max(0, Math.min(1, alpha));

  const color = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${validAlpha})`;
  return color;
};

export default getRandomColor;
