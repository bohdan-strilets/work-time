import { useEffect } from 'react';
import UserList from 'components/UserList';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';

const ListOfUsersPages: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(operations.getAllUsers());
  }, [dispatch]);

  return <UserList />;
};

export default ListOfUsersPages;
