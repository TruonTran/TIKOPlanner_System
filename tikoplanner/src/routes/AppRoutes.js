import { Routes, Route } from "react-router-dom";
import Login from "../views/auth/LoginPage";
import ForgotPassword from "../views/auth/ForgotPage"
import NewPassPage from "../views/auth/NewPassPage";
import RegisterPage from "../views/auth/SignUpPage";

import GuestPage from "../views/guest/GuestPage";

import HomePage from "../views/home/studentsHome/HomePage";

import ProfilePage from "../views/profileMentor/Profile";

import StudentPortal from "../views/studentDashboard/StudentPortal";

import MentorDashboard from "../views/mentorDashboard/MentorDashboard";
import WeeklySchedule from "../views/mentorDashboard/WeeklySchedule";
import MentorHome from "../views/home/mentorHome/MentorHome";



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<GuestPage />} />
            {/* giao diện auth */}
            <Route path="/loginpage" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/newpass" element={<NewPassPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            {/* giao diện cho sinh viên khi đã đăng nhập */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/studentportal" element={<StudentPortal />} />
            {/* xem chi tiết profile của mentor */}
            <Route path="/profile/:id" element={<ProfilePage />} />
            {/* giao diện cho mentor khi đăng nhập  */}
            <Route path="/mentorHome" element={<MentorHome />} />
            <Route path="/mentorDashboard" element={<MentorDashboard />} />
            <Route path="/weeklyschedule" element={<WeeklySchedule />} />
        </Routes>
    );
}
