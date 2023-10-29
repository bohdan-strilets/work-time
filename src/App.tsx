import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import AuthPage from "pages/AuthPage";
import CalendarPage from "pages/CalendarPage";

const App: React.FC<{}> = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
