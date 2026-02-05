import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    FiGrid,
    FiCalendar,
    FiUsers,
    FiUser,
    FiBell,
    FiDollarSign,
    FiLogOut
} from 'react-icons/fi';

import '../studentDashboard/StudentPortal.css';

const MentorSharedLayout = ({ children, activeMenu = 'dashboard' }) => {

    const navigate = useNavigate();
    const [sidebarOpen] = useState(true);

    const menuItems = [
        { icon: FiGrid, label: 'Dashboard', path: '/mentordashboard' },
        { icon: FiCalendar, label: 'My Schedule', path: '/weeklyschedule' },
        { icon: FiUsers, label: 'Students', path: '/mystudents' },
        { icon: FiDollarSign, label: 'Earnings', path: '/mentor-earnings' },
        { icon: FiUser, label: 'Profile', path: '/mentorprofile' },
        { icon: FiBell, label: 'Notifications', path: '/mentornotifications' }
    ];

    return (
        <div className="student-portal">

            <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>

                <div className="sidebar-header">
                    <div className="avatar">MT</div>
                    <div>
                        <h3>Mentor Portal</h3>
                        <p>Manage your sessions</p>
                    </div>
                </div>

                <nav className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(item.path);
                            }}
                            className={`menu-item ${activeMenu === item.label.toLowerCase() ? 'active' : ''}`}
                        >
                            <span className="icon"><item.icon /></span>
                            <span className="label">{item.label}</span>
                        </a>
                    ))}
                </nav>

                <button
                    className="backtohome-btn"
                    onClick={() => navigate('/mentorHome')}
                >
                    <FiLogOut /> Back to Home
                </button>

            </aside>

            <main className="main-content">
                {children}
            </main>

        </div>
    );
};

export default MentorSharedLayout;
