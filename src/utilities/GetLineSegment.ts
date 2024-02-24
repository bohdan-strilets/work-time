const GetLineSegment = (str: string, start: number, end: number) => {
  const partString = str.slice(start, end);
  return partString;
};

export default GetLineSegment;
