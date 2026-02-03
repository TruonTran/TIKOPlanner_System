import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/sign_auth/LoginPage";
import ForgotPassword from "./components/sign_auth/ForgotPage";
import RegisterPage from "./components/sign_auth/RegisterPage";
import NewPassPage from "./components/sign_auth/NewPassPage";
import HomePage from "./components/main_page/HomePage";
import GuestPage from "./components/main_page/GuestPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/newpass" element={<NewPassPage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
