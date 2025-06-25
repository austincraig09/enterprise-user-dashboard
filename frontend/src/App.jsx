import { useAuth } from "./context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import FinalMilePage from "./pages/FinalMilePage";
import TruckloadPage from "./pages/TruckloadPage";

export default function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />
      {/*TODO: Wrap all of the authenticated routes in one "isAuthenticated" check */}
      <Route element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/final-mile/:section" element={<FinalMilePage />} />
        <Route path="/truckload/:section" element={<TruckloadPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
}
