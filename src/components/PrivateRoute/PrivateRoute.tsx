import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/user/userSelectors';
import { useAppSelector } from 'hooks/useAppSelector';
import { PrivateRouteProps } from 'types/props/PrivateRouteProps';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));
  return isLoggedIn ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
