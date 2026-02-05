import React, { useState } from "react";
import { useParams } from "react-router-dom";

import mentorData from "../../data/mentor.json";
import slotData from "../../data/slot.json";

import "./Profile.css";

export default function ProfilePage() {

    const { id } = useParams();
    const mentor = mentorData.find(m => m.id === Number(id));

    const [selectedSlot, setSelectedSlot] = useState(null);

    // ===== WEEK STATE =====
    const [weekStart, setWeekStart] = useState(getStartOfWeek(new Date()));

    if (!mentor) return <h2>Mentor not found</h2>;

    const mentorSlots = slotData.filter(
        s => s.mentorId === mentor.id
    );

    const timeMap = {
        1: "08:00 AM",
        2: "09:00 AM",
        3: "11:00 AM",
        4: "01:00 PM",
        5: "03:00 PM"
    };

    // ===== DATE HELPERS =====

    function getStartOfWeek(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff));
    }

    function generateWeekDays(startDate) {
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            return date;
        });
    }

    function formatDay(date) {
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric"
        });
    }

    function formatWeekRange(startDate) {
        const end = new Date(startDate);
        end.setDate(startDate.getDate() + 6);

        return `${startDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        })} - ${end.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        })}`;
    }

    const nextWeek = () => {
        const next = new Date(weekStart);
        next.setDate(weekStart.getDate() + 7);
        setWeekStart(next);
    };

    const prevWeek = () => {
        const prev = new Date(weekStart);
        prev.setDate(weekStart.getDate() - 7);
        setWeekStart(prev);
    };

    const weekDays = generateWeekDays(weekStart);

    // ===== UI =====
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
                </div>

                <div className="profile-about">
                    <h3>About Me</h3>
                    <p>{mentor.about || mentor.desc}</p>
                </div>

            </div>

            {/* RIGHT */}
            <div className="profile-right">

                {/* ===== HEADER BAR ===== */}
                <div className="calendar-top">
                    <div>
                        <h2>Book a Session</h2>
                        <p>Select a time slot that works for you</p>
                    </div>

                    <div className="week-nav">
                        <button onClick={prevWeek}>◀</button>
                        <span>{formatWeekRange(weekStart)}</span>
                        <button onClick={nextWeek}>▶</button>
                    </div>
                </div>

                {/* ===== CALENDAR ===== */}
                <div className="calendar-table">

                    {/* HEADER DAYS */}
                    <div className="calendar-row calendar-header">
                        <div className="time-col">Time</div>

                        {weekDays.map(day => (
                            <div key={day} className="day-col">
                                {formatDay(day)}
                            </div>
                        ))}
                    </div>

                    {/* TIME ROWS */}
                    {Object.entries(timeMap).map(([slotKey, time]) => (

                        <div key={slotKey} className="calendar-row">

                            <div className="time-col">{time}</div>

                            {weekDays.map(day => {

                                const dateStr = day.toISOString().split("T")[0];

                                const slot = mentorSlots.find(
                                    s =>
                                        s.slot === Number(slotKey) &&
                                        s.date === dateStr
                                );

                                const isDisabled =
                                    !slot || slot.status !== "ON";

                                return (
                                    <button
                                        key={dateStr}
                                        disabled={isDisabled}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`calendar-slot
                                            ${isDisabled ? "disabled" : ""}
                                            ${selectedSlot === slot ? "selected" : ""}
                                        `}
                                    >
                                        {slot ? time : ""}
                                    </button>
                                );
                            })}

                        </div>
                    ))}

                </div>

                {/* ===== BOTTOM BAR ===== */}
                {selectedSlot && (
                    <div className="selected-slot">

                        <div>
                            <h4>Selected Slot</h4>
                            <p>
                                {selectedSlot.date} - {timeMap[selectedSlot.slot]}
                            </p>
                        </div>

                        <div className="slot-actions">
                            <button className="msg-btn">Message</button>
                            <button className="book-btn">
                                Book Session ($150)
                            </button>
                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}
