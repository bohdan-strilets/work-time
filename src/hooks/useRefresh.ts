import { useEffect } from 'react';
import operations from '../redux/user/userOperations';
import { getIsRefreshing, getIsLoggedIn } from '../redux/user/userSelectors';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useRefresh = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(operations.refreshUser());
      dispatch(operations.currentUser());
    }
  }, [dispatch, isLoggedIn]);

  return { isRefreshing };
};

export default useRefresh;
