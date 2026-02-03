import { Routes, Route } from "react-router-dom";
import Login from "../views/auth/LoginPage";
import ForgotPassword from "../views/auth/ForgotPage"
import NewPassPage from "../views/auth/NewPassPage";
import RegisterPage from "../views/auth/SignUpPage";
import GuestPage from "../views/guest/GuestPage";
import HomePage from "../views/home/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<GuestPage />} />

            <Route path="/loginpage" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/newpass" element={<NewPassPage />} />
            <Route path="/signup" element={<RegisterPage />} />

            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}
