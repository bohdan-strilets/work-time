import { useEffect } from 'react';
import operations from '../redux/user/userOperations';
import { getIsRefreshing } from '../redux/user/userSelectors';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useRefresh = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);
  const dataByLs = localStorage.getItem('persist:user');
  const parsedData = JSON.parse(dataByLs ?? '');
  const token = parsedData.token;

  useEffect(() => {
    if (token !== null && token !== 'null') {
      dispatch(operations.currentUser());
    }
  }, [dispatch, token]);

  return { isRefreshing };
};

export default useRefresh;
