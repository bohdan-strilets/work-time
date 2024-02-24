const getRandomColor = (alpha: number): string => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const validAlpha = Math.max(0, Math.min(1, alpha));

  const color = `rgba(${red}, ${green}, ${blue}, ${validAlpha})`;
  return color;
};

export default getRandomColor;
