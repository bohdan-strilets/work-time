const BytesToMegabytes = (bytes: number): number => {
  const megabytes = bytes / (1024 * 1024);
  return Math.round(megabytes * 10) / 10;
};

export default BytesToMegabytes;
