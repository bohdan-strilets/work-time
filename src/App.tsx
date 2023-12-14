import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import CalendarPage from 'pages/CalendarPage';
import ProfilePage from 'pages/ProfilePage';
import AboutPage from 'pages/AboutPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import StatisticsPage from 'pages/StatisticsPage';
import useRefresh from 'hooks/useRefresh';

const App: React.FC<{}> = () => {
  const { isRefreshing } = useRefresh();

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
            <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </Layout>
      ) : null}
    </>
  );
};

export default App;
