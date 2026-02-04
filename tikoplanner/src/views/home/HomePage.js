/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "../style.css";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("dashboard");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    if (!user) return null;

    return (
        <div className="page">
            {/* ================= HEADER ================= */}
            <div className="header home-header">
                <img src="/assets/leftLogo.png" className="logo home-logo" />

                <div className="navRow">
                    <div
                        className={activeTab === "dashboard" ? "navActive" : "navItem"}
                        onClick={() => setActiveTab("dashboard")}
                    >
                        Dashboard
                    </div>

                    <div
                        className={activeTab === "mentors" ? "navActive" : "navItem"}
                        onClick={() => setActiveTab("mentors")}
                    >
                        Mentors
                    </div>

                    <div
                        className={activeTab === "resources" ? "navActive" : "navItem"}
                        onClick={() => setActiveTab("resources")}
                    >
                        Resources
                    </div>

                    <div
                        className={activeTab === "schedule" ? "navActive" : "navItem"}
                        onClick={() => setActiveTab("schedule")}
                    >
                        Schedule
                    </div>
                </div>

                <div className="profileRow">
                    <IoSunnyOutline size={20} color="#6b7280" />
                    <img src={user.avatar} className="avatar" />
                    <strong>{user.name}</strong>
                </div>
            </div>

            {/* ================= HERO ================= */}
            <div className="hero">
                <div className="heroLeft">
                    <div className="heroTitle">
                        Welcome back,{" "}
                        <span className="heroHighlight">{user.name}</span> 👋
                    </div>

                    <div className="heroDesc">
                        Ready to achieve your goals? Search for your next lesson or browse
                        your mentors.
                    </div>

                    <div className="searchBox">
                        <IoSearchOutline size={18} />
                        <input
                            type="text"
                            placeholder="Search mentors, topics, or resources..."
                            className="searchInput"
                        />
                    </div>
                </div>

                <div className="mascotWrap">
                    <div className="mascotCircle">
                        <img src="/assets/favicon.png" width="80" />
                        <div className="mascotText">TIKO MASCOT</div>
                    </div>
                </div>
            </div>


            {/* ================= TAB CONTENT ================= */}
            <div style={{ padding: "0 20px 40px" }}>
                {activeTab === "dashboard" && <Dashboard />}
                {activeTab === "mentors" && <Mentors />}
                {activeTab === "resources" && <Resources />}
                {activeTab === "schedule" && <Schedule />}
            </div>

            <Footer />
        </div>
    );
}

/* ================= TAB SECTIONS ================= */

function Dashboard() {
    return (
        <div>
            <h2>📊 Dashboard</h2>
            <p>Your learning progress and overview will appear here.</p>
        </div>
    );
}

function Mentors() {
    return (
        <div>
            <h2>👨‍🏫 Mentors</h2>
            <p>Browse and connect with your favorite mentors.</p>
        </div>
    );
}

function Resources() {
    return (
        <div>
            <h2>📚 Resources</h2>
            <p>Learning materials, documents, and videos.</p>
        </div>
    );
}

function Schedule() {
    return (
        <div>
            <h2>🗓️ Schedule</h2>
            <p>Your upcoming lessons and bookings.</p>
        </div>
    );
}

