const GetLineSegment = (string: string, start: number, end: number) => {
  const result = string.slice(start, end);
  return result;
};

export default GetLineSegment;
