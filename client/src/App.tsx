import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const Register = lazy(() => import("./pages/register"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>home page</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>Search page</p>
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout>
            <Register />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
