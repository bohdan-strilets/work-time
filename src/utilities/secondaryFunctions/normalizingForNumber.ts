const normalizingForNumber = (number: number): string => {
  const stringWithSpaces = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const [integerPart, decimalPart] = stringWithSpaces.split('.');
  const normalizedNumber = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  return normalizedNumber;
};

export default normalizingForNumber;
