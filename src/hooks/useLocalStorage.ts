const useLocalStorage = () => {
  const getDataFromLs = (key: string) => {
    const dataFromLs = window.localStorage.getItem(key);
    if (dataFromLs) {
      const parsedDataFromLs = JSON.parse(dataFromLs);
      return parsedDataFromLs;
    }
    return;
  };

  const setDataToLs = (key: string, data: any) => {
    const dataForLs = JSON.stringify(data);
    window.localStorage.setItem(key, dataForLs);
  };

  const deleteDataFromLs = (key: string) => {
    window.localStorage.removeItem(key);
  };

  return { getDataFromLs, setDataToLs, deleteDataFromLs };
};

export default useLocalStorage;
