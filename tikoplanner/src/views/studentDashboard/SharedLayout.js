/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGrid, FiUsers, FiUser, FiBell, FiLogOut, FiCalendar } from 'react-icons/fi';
import './StudentPortal.css';

const SharedLayout = ({ children, activeMenu = 'dashboard' }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: FiGrid, label: 'Dashboard', path: '/studentportal' },
    { icon: FiCalendar, label: 'Schedule', path: '/schedule' },
    { icon: FiUsers, label: 'Mentors', path: '/mentors' },
    { icon: FiUsers, label: 'Groups', path: '/groups' },
    { icon: FiUser, label: 'Profile', path: '/profile' },
    { icon: FiBell, label: 'Notifications', path: '/notifications' },
  ];

  return (
    <div className="student-portal">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="avatar">TC</div>
          <div>
            <h3>Student Portal</h3>
            <p>Welcome back</p>
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
          onClick={() => navigate('/home')}
        >
          <FiLogOut /> Back to Home
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default SharedLayout;
