import React, { useState } from 'react';

import {
  FiSearch,
  FiBell,
  FiClipboard,
  FiGrid,
  FiBarChart2,
  FiAlertCircle,
  FiArrowRight,
  FiEdit2,
  FiCheckCircle,
  FiCalendar
} from 'react-icons/fi';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import SharedLayout from './SharedLayout';

import upcomingData from '../../data/upcomingClasses.json';
import notificationData from '../../data/notifications.json';

import './StudentPortal.css';

const StudentPortal = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDate] = useState(new Date(2023, 9, 5));

  /* ===== ICON MAP ===== */

  const classIcons = {
    arrow: FiArrowRight,
    edit: FiEdit2,
    chart: FiBarChart2,
    grid: FiGrid
  };

  const notificationIcons = {
    REMINDER: FiBell,
    BOOKING_CONFIRMED: FiCheckCircle,
    SLOT_AVAILABLE: FiCalendar,
    SESSION_COMPLETED: FiClipboard,
    SYSTEM: FiAlertCircle
  };

  /* ===== CALENDAR ===== */

  const calendarDays = () => {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  return (
    <SharedLayout activeMenu="dashboard">

      <main className="main-content">

        {/* HEADER */}
        <header className="header">

          <div className="header-left">

            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            <div className="breadcrumb">
              <FiBarChart2 /> <span>Dashboard</span>
            </div>

          </div>

          <div className="header-search">
            <FiSearch />
            <input placeholder="Search mentors, classes, or resources..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn"><FiBell /></button>
            <button className="icon-btn"><FiClipboard /></button>
          </div>

        </header>

        {/* CONTENT */}
        <div className="content">

          {/* ===== STATS ===== */}
          <section className="stats-row">

            <div className="stat-card">
              <div className="stat-icon"><FiCalendar /></div>
              <div className="stat-content">
                <p className="stat-label">Total Bookings</p>
                <p className="stat-value">{upcomingData.length}</p>
              </div>
              <span className="stat-badge">+2 this week</span>
            </div>

            <div className="stat-card">
              <div className="stat-icon"><FiAlertCircle /></div>
              <div className="stat-content">
                <p className="stat-label">Pending Requests</p>
                <p className="stat-value">
                  {upcomingData.filter(c => c.status === "Pending").length}
                </p>
              </div>
              <span className="stat-badge urgent">Action required</span>
            </div>

          </section>

          <div className="content-grid">

            {/* ===== LEFT ===== */}
            <div className="left-section">

              <section className="upcoming-classes">

                <div className="section-header">
                  <h2>Upcoming Classes</h2>
                  <a href="/">View All</a>
                </div>

                <table className="classes-table">

                  <thead>
                    <tr>
                      <th>CLASS NAME</th>
                      <th>MENTOR</th>
                      <th>TIME</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>

                  <tbody>
                    {upcomingData.map(cls => {

                      const Icon = classIcons[cls.icon];

                      return (
                        <tr key={cls.id}>

                          <td>
                            <span className="class-icon">
                              {Icon && <Icon />}
                            </span>
                            {cls.name}
                          </td>

                          <td>{cls.mentor}</td>

                          <td>{cls.time}</td>

                          <td>
                            <span className={`status-badge ${cls.status.toLowerCase()}`}>
                              {cls.status}
                            </span>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>

                </table>

              </section>

            </div>

            {/* ===== RIGHT ===== */}
            <aside className="right-section">

              {/* CALENDAR */}
              <div className="calendar">

                <div className="calendar-header">
                  <button>◀</button>
                  <h3>
                    {currentDate.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric"
                    })}
                  </h3>
                  <button>▶</button>
                </div>

                <div className="calendar-weekdays">
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>

                <div className="calendar-days">
                  {calendarDays().map((day, index) => (
                    <div
                      key={index}
                      className={`day ${day === currentDate.getDate() ? 'selected' : ''} ${!day ? 'empty' : ''}`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

              </div>

              {/* ===== NOTIFICATIONS ===== */}
              <section className="notifications">

                <div className="notifications-header">
                  <h3>Notifications</h3>
                  <a href="/">Mark all read</a>
                </div>

                <div className="notifications-list">

                  {notificationData.map(notif => {

                    const Icon = notificationIcons[notif.type];

                    return (
                      <div
                        key={notif.id}
                        className={`notification-item ${!notif.isRead ? 'unread' : ''}`}
                      >

                        <div className="notif-icon">
                          {Icon && <Icon />}
                        </div>

                        <div className="notif-content">
                          <h4>{notif.title}</h4>
                          <p>{notif.desc}</p>
                          {notif.time && <small>{notif.time}</small>}
                        </div>

                      </div>
                    );
                  })}

                </div>

              </section>

              {/* PREMIUM */}
              <div className="premium-box">
                <h3>Premium Mentorship</h3>
                <p>Unlock 1-on-1 sessions with industry experts.</p>
                <button className="upgrade-btn">Upgrade Now</button>
              </div>

            </aside>

          </div>

        </div>

      </main>

    </SharedLayout>
  );
};

export default StudentPortal;
