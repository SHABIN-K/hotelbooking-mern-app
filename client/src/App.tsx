import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";


const SignIn = lazy(() => import("./pages/SignIn"));
const Register = lazy(() => import("./pages/Register"));

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
      <Route
        path="/sign-in"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
