import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import AuthPage from "pages/AuthPage";

const App: React.FC<{}> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
