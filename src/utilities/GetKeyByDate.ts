const GetKeyByDate = (date: Date | null): string => {
  if (date) {
    const dayMonth = date?.getDate().toString().padStart(2, '0');
    const month = (date?.getMonth() + 1).toString().padStart(2, '0');
    const year = date?.getFullYear();
    const key = `${dayMonth}-${month}-${year}`;
    return key;
  }
  return '';
};

export default GetKeyByDate;
