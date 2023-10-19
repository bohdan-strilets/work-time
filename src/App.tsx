import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import HomePage from "pages/HomePage";

const App: React.FC<{}> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
