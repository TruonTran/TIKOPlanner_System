import React from 'react';

import {
    FiUsers,
    FiCalendar,
    FiDollarSign,
    FiAlertCircle
} from 'react-icons/fi';

import MentorSharedLayout from './MentorSharedLayout';

import sessionsData from '../../data/mentorSessions.json';
import notifications from '../../data/mentorNotifications.json';

import './MentorDashboard.css';

const MentorDashboard = () => {

    return (
        <MentorSharedLayout activeMenu="dashboard">

            <div className="content">

                {/* ===== STATS ===== */}
                <section className="stats-row">

                    <div className="stat-card">
                        <div className="stat-icon"><FiCalendar /></div>
                        <div className="stat-content">
                            <p className="stat-label">Total Sessions</p>
                            <p className="stat-value">{sessionsData.length}</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon"><FiUsers /></div>
                        <div className="stat-content">
                            <p className="stat-label">Active Students</p>
                            <p className="stat-value">
                                {new Set(sessionsData.map(s => s.student)).size}
                            </p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon"><FiDollarSign /></div>
                        <div className="stat-content">
                            <p className="stat-label">Earnings</p>
                            <p className="stat-value">$1,240</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon"><FiAlertCircle /></div>
                        <div className="stat-content">
                            <p className="stat-label">Pending Requests</p>
                            <p className="stat-value">
                                {sessionsData.filter(s => s.status === "Pending").length}
                            </p>
                        </div>
                    </div>

                </section>

                {/* ===== UPCOMING SESSIONS ===== */}
                <section className="upcoming-classes">

                    <div className="section-header">
                        <h2>Upcoming Sessions</h2>
                    </div>

                    <table className="classes-table">
                        <thead>
                            <tr>
                                <th>STUDENT</th>
                                <th>SESSION</th>
                                <th>TIME</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sessionsData.map(session => (
                                <tr key={session.id}>
                                    <td>{session.student}</td>
                                    <td>{session.topic}</td>
                                    <td>{session.time}</td>
                                    <td>
                                        <span className={`status-badge ${session.status.toLowerCase()}`}>
                                            {session.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </section>

                {/* ===== NOTIFICATIONS ===== */}
                <section className="notifications">

                    <div className="notifications-header">
                        <h3>Notifications</h3>
                    </div>

                    <div className="notifications-list">
                        {notifications.map(n => (
                            <div key={n.id} className="notification-item">
                                <h4>{n.title}</h4>
                                <p>{n.desc}</p>
                            </div>
                        ))}
                    </div>

                </section>

            </div>

        </MentorSharedLayout>
    );
};

export default MentorDashboard;
