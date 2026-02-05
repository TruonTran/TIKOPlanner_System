/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './WeeklySchedule.css';
import SetAvailability from './SetAvailability';
import MentorSharedLayout from './MentorSharedLayout';
import upcomingClasses from '../../data/upcomingClasses.json';

/* ===== LẤY TUẦN HIỆN TẠI (GIỐNG SET AVAILABILITY) ===== */
const getCurrentWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) - 6 (Sat)
  const monday = new Date(today);
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  monday.setDate(today.getDate() + diff);

  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    week.push({
      day: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      key: date.toISOString().split('T')[0], // YYYY-MM-DD
      dateNumber: date.getDate(),
    });
  }
  return week;
};

const WeeklySchedule = () => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const weekDays = getCurrentWeek();

  // ===== SLOT DEFINITIONS (GIỐNG SET AVAILABILITY) =====
  const slotDefinitions = [
    { id: 1, label: 'Slot 1', time: '07:00 - 09:15' },
    { id: 2, label: 'Slot 2', time: '09:30 - 11:45' },
    { id: 3, label: 'Slot 3', time: '13:00 - 15:15' },
    { id: 4, label: 'Slot 4', time: '15:30 - 17:45' },
    { id: 5, label: 'Slot 5', time: '18:00 - 19:00' },
    { id: 6, label: 'Slot 6', time: '19:00 - 20:00' },
    { id: 7, label: 'Slot 7', time: '20:00 - 21:00' },
    { id: 8, label: 'Slot 8', time: '21:00 - 22:00' },
  ];

  /* ===== VỊ TRÍ EVENT THEO SLOT ===== */
  const getEventPosition = (event) => {
    const slotIndex = event.slotId - 1;
    const slotHeight = 100 / slotDefinitions.length;

    return {
      top: `${slotIndex * slotHeight}%`,
      height: `${slotHeight}%`,
    };
  };

  const getEventsByDate = (dayKey) => {
    return events.filter(e => e.dateKey === dayKey);
  };

  const EVENT_COLORS = ['blue', 'cyan', 'purple', 'gray'];

  const getRandomEventColor = () => {
    const index = Math.floor(Math.random() * EVENT_COLORS.length);
    return EVENT_COLORS[index];
  };


  /* ===== SAVE AVAILABILITY ===== */
  const handleSaveAvailability = (availabilityData) => {
    const newEvents = [];
    let eventId = events.length + 1;

    Object.keys(availabilityData).forEach((dayKey) => {
      const slots = availabilityData[dayKey];

      slots.forEach((slot) => {
        const slotInfo = slotDefinitions.find(s => s.id === slot.slotId);

        newEvents.push({
          id: eventId++,
          title: 'Available',
          slotId: slot.slotId,
          time: slotInfo.time,
          dateKey: dayKey,
          color: getRandomEventColor(),
          description: `Available • ${slotInfo.label}`,
          isAvailability: true,
        });
      });
    });

    setEvents(prev => [...prev, ...newEvents]);
  };

  /* ===== MINI CALENDAR ===== */
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const goToPrevMonth = () => {
    setCurrentMonth(prev =>
      new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev =>
      new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const calendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };

  return (
    <MentorSharedLayout activeMenu="schedule">
      {/* HEADER */}
      <header className="schedule-header">
        <div className="header-left">
          <h1>Weekly Schedule</h1>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">Sync Calendar</button>
          <button
            className="btn-primary"
            onClick={() => setIsAvailabilityOpen(true)}
          >
            + Set Availability
          </button>
        </div>
      </header>

      {/* MODAL */}
      <SetAvailability
        isOpen={isAvailabilityOpen}
        onClose={() => setIsAvailabilityOpen(false)}
        onSave={handleSaveAvailability}
      />

      <div className="schedule-content">
        <section className="schedule-section">
          {/* WEEK HEADER */}
          <div className="week-header">
            <div className="time-column"></div>
            {weekDays.map((d) => (
              <div key={d.key} className="week-day">
                <div className="day-name">{d.day}</div>
                <div className="day-number">{d.dateNumber}</div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className="schedule-timeline">
            {/* SLOT COLUMN */}
            <div className="time-column">
              {slotDefinitions.map((slot) => (
                <div key={slot.id} className="time-slot">
                  <strong>{slot.label}</strong>
                </div>
              ))}
            </div>

            {/* EVENTS */}
            <div className="events-container">
              {weekDays.map((d) => (
                <div key={d.key} className="day-column">
                  {getEventsByDate(d.key).map((event) => (
                    <div
                      key={event.id}
                      className={`event event-${event.color} availability`}
                      style={getEventPosition(event)}
                    >
                      <div className="event-content">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="schedule-right">
          <div className="mini-calendar">
            <div className="calendar-header">
              <button onClick={goToPrevMonth}>◀</button>
              <h3>
                {currentMonth.toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h3>
              <button onClick={goToNextMonth}>▶</button>
            </div>

            <div className="calendar-weekdays">
              <div>S</div><div>M</div><div>T</div>
              <div>W</div><div>T</div><div>F</div><div>S</div>
            </div>

            <div className="calendar-days">
              {calendarDays().map((day, index) => {
                const hasAvailability = events.some(
                  e =>
                    e.isAvailability &&
                    new Date(e.dateKey).getDate() === day
                );

                return (
                  <div
                    key={index}
                    className={`day ${!day ? 'empty' : ''} ${hasAvailability ? 'has-availability' : ''}`}
                  >
                    {day}
                    {hasAvailability && <div className="availability-dot"></div>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="upcoming-requests">
            <div className="requests-header">
              <h3>Upcoming Requests</h3>
              <a href="/" className="view-all">View All</a>
            </div>

            <div className="requests-list">
              {upcomingClasses.map((item) => (
                <div key={item.id} className="request-item">
                  <div className="request-avatar">
                    {item.mentor.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div className="request-info">
                    <h4>{item.mentor}</h4>
                    <p>{item.name} • {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </MentorSharedLayout>
  );
};

export default WeeklySchedule;
