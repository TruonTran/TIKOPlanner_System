/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "../style.css";
import Footer from "../../components/layout/Footer";
export default function HomePage() {
    const [user, setUser] = useState(null);
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
            {/* ===== HEADER ===== */}
            <div className="header home-header">
                <img src="/assets/leftLogo.png" className="logo home-logo" />

                <div className="navRow">
                    <div className="navActive">Dashboard</div>
                    <div className="navItem">Mentors</div>
                    <div className="navItem">Resources</div>
                    <div className="navItem">Schedule</div>
                </div>

                <div className="profileRow">
                    <IoSunnyOutline size={20} color="#6b7280" />
                    <img src={user.avatar} className="avatar" />
                    <strong>{user.name}</strong>
                </div>
            </div>

            {/* ===== HERO ===== */}
            <div className="hero">
                <div style={{ flex: 1 }}>
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
                        Search for mentors, topics, or resources...
                    </div>
                </div>

                <div className="mascotWrap">
                    <div className="mascotCircle">
                        <img src="/assets/favicon.png" width="80" />
                        <div className="mascotText">TIKO MASCOT</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
