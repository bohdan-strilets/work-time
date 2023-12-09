import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import CalendarPage from 'pages/CalendarPage';
import ProfilePage from 'pages/ProfilePage';
import AboutPage from 'pages/AboutPage';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getIsRefreshing } from './redux/user/userSelectors';
import operations from './redux/user/userOperations';

const App: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
