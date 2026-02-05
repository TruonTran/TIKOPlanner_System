/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./MentorHome.css";
import Footer from "../../layout/Footer";


export default function MentorHome() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);


    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/login");
            return;
        }

        const parsedUser = JSON.parse(storedUser);

        // ⭐ CHẶN ROLE
        if (parsedUser.role !== "mentor") {
            alert("You are not allowed to access mentor page!");
            navigate("/home");
            return;
        }

        setUser(parsedUser);
    }, [navigate]);

    if (!user) return null;

    return (
        <div className="mentor-page">
            <div className="page">

                {/* HEADER */}
                <div className="header mentor-header">
                    <img src="/assets/leftLogo.png" className="logo" />

                    <div className="mentor-title">
                        Mentor Dashboard
                    </div>

                    <div
                        className="mentor-user-menu"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <div className="mentor-avatar">
                            {user.avatar ? (
                                <img src={user.avatar} />
                            ) : (
                                <div className="mentor-avatar-circle">
                                    {user.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        <span className="mentor-name">{user.name}</span>
                        <IoChevronDownOutline />

                        {openMenu && (
                            <div className="mentor-dropdown">
                                <div onClick={() => navigate("/mentordashboard")}>
                                    📊 Dashboard
                                </div>
                                <div onClick={() => navigate("/changepassword")}>
                                    🔒 Change Password
                                </div>
                                <div
                                    className="logout"
                                    onClick={() => {
                                        localStorage.removeItem("user");
                                        navigate("/login");
                                    }}
                                >
                                    🚪 Logout
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* HERO */}
                <section className="mentor-hero">
                    <div className="mentor-hero-card">
                        <span className="badge-academic">Mentor Panel</span>

                        <h1 className="hero-title">
                            Welcome back, {user.name} 👋
                        </h1>

                        <p className="hero-subtitle">
                            Manage your profile, students, and upcoming mentoring sessions
                            from one place.
                        </p>

                        <div className="mentor-action-row">
                            <button onClick={() => navigate("/mentor/profile")}>
                                ✏️ Edit Profile
                            </button>
                            <button onClick={() => navigate("/mentor/schedule")}>
                                📅 My Schedule
                            </button>
                            <button onClick={() => navigate("/mentor/students")}>
                                🎓 My Students
                            </button>
                        </div>
                    </div>
                </section>

                {/* DASHBOARD */}
                <section className="mentor-dashboard">
                    <div className="dashboard-card">
                        <h3>⭐ Rating</h3>
                        <p>{user.rating || "N/A"}</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>📚 Major</h3>
                        <p>{user.major || "Not set"}</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>🧑‍🎓 Students</h3>
                        <p>12</p>
                    </div>

                    <div className="dashboard-card">
                        <h3>📅 Sessions</h3>
                        <p>5 upcoming</p>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
