import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile";
import Compare from "./pages/Compare/Compare";
import ResidentialSpace from "./pages/ResidentialSpace/Residentialspace";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route path="/login/*" element={<LogIn />} />
      <Route path="/residential-space" element={<ResidentialSpace />} />
      <Route path="/CompanyProfile" element={<CompanyProfile />} />
      <Route path="/Compare" element={<Compare />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;