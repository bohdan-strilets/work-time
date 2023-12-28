import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Loader from 'components/UI/Loader';
import useRefresh from 'hooks/useRefresh';

const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const ResetPasswordPage = lazy(() => import('pages/ResetPasswordPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App: React.FC<{}> = () => {
  const { isRefreshing } = useRefresh();

  return (
    <>
      {!isRefreshing ? (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
