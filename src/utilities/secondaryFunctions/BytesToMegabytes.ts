const NumberBytesInMegabyte = 1024;

const BytesToMegabytes = (bytes: number): number => {
  const megabytes = bytes / (NumberBytesInMegabyte * NumberBytesInMegabyte);
  const megabyteInteger = Math.round(megabytes * 10) / 10;
  return megabyteInteger;
};

export default BytesToMegabytes;
