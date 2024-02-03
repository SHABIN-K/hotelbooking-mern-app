import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>helo</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>helo</p>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
