import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/user/userSelectors';
import { useAppSelector } from 'hooks/useAppSelector';
import { PublicRouteProps } from 'types/props/PublicRouteProps';

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{children}</>;
};

export default PublicRoute;
