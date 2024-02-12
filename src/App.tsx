import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/UI/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import useRefresh from 'hooks/useRefresh';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from './redux/settings/settingsSelectors';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import useSoundSprite from 'hooks/useSoundSprite';

const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const ResetPasswordPage = lazy(() => import('pages/ResetPasswordPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const ListOfUsersPages = lazy(() => import('pages/ListOfUsersPages'));
const TodosPage = lazy(() => import('pages/TodosPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App: React.FC<{}> = () => {
  const { isRefreshing } = useRefresh();
  const theme = useAppSelector(getTheme);
  const { play } = useSoundSprite();

  useEffect(() => {
    document.body.className = theme === ThemeEnum.Dark ? 'dark' : '';
  }, [theme]);

  useEffect(() => {
    const handleClick = () => play({ id: SoundNamesEnum.MouseClick });
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [play]);

  return (
    <>
      {!isRefreshing ? (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/auth"
                element={
                  <PublicRoute restricted={true}>
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <PrivateRoute>
                    <CalendarPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/calculator"
                element={
                  <PrivateRoute>
                    <CalculatorPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about-us"
                element={
                  <PrivateRoute>
                    <AboutPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/auth/reset-password"
                element={
                  <PublicRoute restricted={true}>
                    <ResetPasswordPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/statistics"
                element={
                  <PrivateRoute>
                    <StatisticsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/list-users"
                element={
                  <PrivateRoute>
                    <ListOfUsersPages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/todos"
                element={
                  <PrivateRoute>
                    <TodosPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute>
                    <NotFoundPage />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
