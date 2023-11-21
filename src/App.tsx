import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import CalendarPage from 'pages/CalendarPage';
import ProfilePage from 'pages/ProfilePage';

const App: React.FC<{}> = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
