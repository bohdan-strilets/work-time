const normalizingForNumber = (number: number): string => {
  const stringByNumber = number.toString();
  const arrOfNumber = stringByNumber.split('.');
  const numberToPoint = arrOfNumber[0];
  const numberAfterPoint = arrOfNumber[1];
  const arrNumbers = numberToPoint.split('');
  if (numberToPoint && numberToPoint.length === 4) {
    arrNumbers.splice(1, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 5) {
    arrNumbers.splice(2, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 6) {
    arrNumbers.splice(3, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 7) {
    arrNumbers.splice(1, 0, ' ');
    arrNumbers.splice(5, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 8) {
    arrNumbers.splice(2, 0, ' ');
    arrNumbers.splice(6, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 9) {
    arrNumbers.splice(3, 0, ' ');
    arrNumbers.splice(7, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  if (numberToPoint && numberToPoint.length === 10) {
    arrNumbers.splice(1, 0, ' ');
    arrNumbers.splice(5, 0, ' ');
    arrNumbers.splice(9, 0, ' ');
    const transformatedNumber = arrNumbers.join().replaceAll(',', '');
    return numberAfterPoint
      ? `${transformatedNumber}.${numberAfterPoint}`
      : `${transformatedNumber}`;
  }
  return number.toString();
};

export default normalizingForNumber;
