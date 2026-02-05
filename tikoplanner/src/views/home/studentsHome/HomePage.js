/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "../../auth/style.css";
import "./HomePage.css";
import Footer from "../../layout/Footer";

import mentorData from "../../../data/mentor.json";
import MentorSearchHero from "./SearchMentor";

export default function HomePage() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("mentors");
    const navigate = useNavigate();

    // search typing
    const [searchKeyword, setSearchKeyword] = useState("");

    // search applied after click
    const [appliedKeyword, setAppliedKeyword] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    // ⭐ SORT STATE
    const [sortType, setSortType] = useState("rating");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    if (!user) return null;

    // ⭐ Search button
    const handleSearch = () => {
        setAppliedKeyword(searchKeyword);
        setActiveTab("mentors");
    };

    // ⭐ FILTER + SORT
    const filteredMentors = mentorData
        .filter((mentor) => {

            const matchKeyword =
                mentor.name.toLowerCase().includes(appliedKeyword.toLowerCase()) ||
                mentor.role.toLowerCase().includes(appliedKeyword.toLowerCase()) ||
                mentor.desc.toLowerCase().includes(appliedKeyword.toLowerCase());

            const matchCategory =
                selectedCategory === "All" ||
                mentor.category === selectedCategory;

            return matchKeyword && matchCategory;
        })
        .sort((a, b) => {

            if (sortType === "rating") return b.rating - a.rating;

            if (sortType === "reviews") return b.reviews - a.reviews;

            if (sortType === "name") return a.name.localeCompare(b.name);

            return 0;
        });

    return (
        <div className="home-page">
            <div className="page">

                {/* HEADER */}
                <div className="header home-header">
                    <img src="/assets/leftLogo.png" className="logo home-logo" />

                    <div className="navRow">
                        <div
                            className={activeTab === "mentors" ? "navActive" : "navItem"}
                            onClick={() => setActiveTab("mentors")}
                        >
                            Mentors
                        </div>

                        <div
                            className={activeTab === "About" ? "navActive" : "navItem"}
                            onClick={() => setActiveTab("About")}
                        >
                            About
                        </div>
                    </div>

                    <div className="profileRow">
                        <IoSunnyOutline size={20} color="#6b7280" />
                        <img src={user.avatar} className="avatar" />
                        <strong>{user.name}</strong>
                    </div>
                </div>

                {/* HERO SEARCH */}
                <MentorSearchHero
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    onSearch={handleSearch}
                />

                {/* TAB CONTENT */}
                <div style={{ padding: "0 20px 40px" }}>
                    {activeTab === "mentors" && (
                        <Mentors
                            mentors={filteredMentors}
                            sortType={sortType}
                            setSortType={setSortType}
                        />
                    )}
                    {activeTab === "About" && <About />}
                </div>

                <Footer />
            </div>
        </div>
    );
}


/* ================= MENTOR TAB ================= */

function Mentors({ mentors, sortType, setSortType }) {

    const navigate = useNavigate();

    // ⭐ Lấy top 3 mentor có reviews cao nhất
    const topReviewMentors = [...mentors]
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, 3)
        .map((m) => m.id);

    return (
        <section className="mentor-recommend-section">

            <div className="mentor-section-header">
                <div>
                    <h2>Recommended Mentors</h2>
                    <span>Showing {mentors.length} mentors</span>
                </div>

                <div className="sort-box">
                    Sort by:

                    <select
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="rating">⭐ Highest Rated</option>
                        <option value="reviews">🔥 Most Reviews</option>
                        <option value="name">🔤 Name A-Z</option>
                    </select>
                </div>
            </div>

            <div className="mentor-grid">
                {mentors.map((mentor) => (
                    <div key={mentor.id} className="mentor-card">

                        {/* ⭐ BADGE LOGIC */}
                        {mentor.rating >= 4.9 && (
                            <div className="mentor-badge top">🏆 Top Rated</div>
                        )}

                        {topReviewMentors.includes(mentor.id) && (
                            <div className="mentor-badge trending" style={{ top: "44px" }}>
                                🔥 Most Reviews
                            </div>
                        )}


                        <img src={mentor.avatar} className="mentor-avatar" />

                        <h3>{mentor.name}</h3>
                        <p className="mentor-role">{mentor.role}</p>

                        <div className="mentor-rating">
                            ⭐ {mentor.rating} ({mentor.reviews})
                        </div>

                        <p className="mentor-desc">{mentor.desc}</p>

                        <button className="book-btn">📅 Book Now</button>
                        <button
                            className="view-btn"
                            onClick={() => navigate(`/profile/${mentor.id}`)}
                        >
                            View Profile
                        </button>


                    </div>
                ))}
            </div>

        </section>
    );
}


/* ================= ABOUT TAB ================= */

function About() {
    return (
        <div>
            <h2>📚 Resources</h2>
            <p>Learning materials, documents, and videos.</p>
        </div>
    );
}
