import React, { useState } from "react";
import { useParams } from "react-router-dom";

import mentorData from "../../data/mentor.json";
import "./Profile.css";

export default function ProfilePage() {

    const { id } = useParams();
    const mentor = mentorData.find(m => m.id === Number(id));

    const [selectedMentor, setSelectedMentor] = useState(null);

    if (!mentor) return <h2>Mentor not found</h2>;

    return (
        <div className="profile-page">

            {/* LEFT */}
            <div className="profile-left">

                <div className="profile-card">
                    <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="mentor-avatar"
                        onError={(e) => {
                            e.target.src = "/assets/default-avatar.png";
                        }}
                    />

                    <h2>{mentor.name}</h2>
                    <p className="profile-role">{mentor.role}</p>

                    <div className="profile-rating">
                        ⭐ {mentor.rating} ({mentor.reviews})
                    </div>

                    <div className="profile-tags">
                        {mentor.skills?.map(skill => (
                            <span key={skill}>{skill}</span>
                        ))}
                    </div>

                    {/* SELECT MENTOR BUTTON */}
                    <button
                        className="select-mentor-btn"
                        onClick={() => setSelectedMentor(mentor)}
                    >
                        Select Mentor
                    </button>

                </div>

                <div className="profile-about">
                    <h3>About Me</h3>
                    <p>{mentor.about || mentor.desc}</p>
                </div>

            </div>

            {/* RIGHT */}
            <div className="profile-right">

                <h2>Mentor Details</h2>
                <p>
                    Book a session or message mentor directly.
                </p>

            </div>

            {/* ===== FIXED BOTTOM PANEL ===== */}
            {selectedMentor && (
                <div className="booking-bar">

                    <div>
                        <h4>Selected Mentor</h4>
                        <p>{selectedMentor.name}</p>
                    </div>

                    <div className="slot-actions">
                        <button className="msg-btn">Message</button>
                        <button className="book-btn">Book</button>
                    </div>

                </div>
            )}

        </div>
    );
}
