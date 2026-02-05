/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './WeeklySchedule.css';
import SetAvailability from './SetAvailability';
import SharedLayout from './SharedLayout';

const WeeklySchedule = () => {
    const [selectedDate, setSelectedDate] = useState(19);
    const [currentMonth] = useState(new Date(2023, 8, 19)); // September 2023
    const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
    const [savedAvailability, setSavedAvailability] = useState({});
    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Resume Review',
            participant: 'Student A',
            time: '09:00 - 09:30',
            startHour: 9,
            startMinute: 0,
            duration: 30,
            date: 18,
            color: 'blue',
            description: 'Resume A • 9:00 - 9:30'
        },
        {
            id: 2,
            title: 'Career Guidance',
            participant: 'Group A',
            time: '9:30 - 10:30',
            startHour: 9,
            startMinute: 30,
            duration: 60,
            date: 19,
            color: 'cyan',
            description: 'Group A • 9:30 - 10:30'
        },
        {
            id: 3,
            title: 'Mock Interview',
            participant: 'Student S',
            time: '1:00 - 2:00',
            startHour: 13,
            startMinute: 0,
            duration: 60,
            date: 19,
            color: 'purple',
            description: 'Student S • 1:00 - 2:00'
        },
        {
            id: 4,
            title: 'Focus Time',
            participant: 'No Disturb',
            time: '3:00 - 4:00',
            startHour: 15,
            startMinute: 0,
            duration: 60,
            date: 21,
            color: 'gray',
            description: 'No Disturb'
        },
    ]);

    const weekDays = [
        { day: 'MON', date: 18 },
        { day: 'TUE', date: 19, active: true },
        { day: 'WED', date: 20 },
        { day: 'THU', date: 21 },
        { day: 'FRI', date: 22 },
        { day: 'SAT', date: 23 },
        { day: 'SUN', date: 24 },
    ];

    const timeSlots = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM',
        '05:00 PM',
    ];

    const calendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
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

    const getEventPosition = (event) => {
        const topPercent = (event.startHour * 60 + event.startMinute) / (12 * 60) * 100;
        const heightPercent = (event.duration / (12 * 60)) * 100;
        return {
            top: `${topPercent}%`,
            height: `${heightPercent}%`,
        };
    };

    const getEventsByDate = (date) => {
        return events.filter(e => e.date === date);
    };

    // Chuyển đổi chuỗi thời gian thành giờ và phút
    const parseTime = (timeString) => {
        const [startTime] = timeString.split(' - ');
        const [hours, minutes] = startTime.split(':').map(Number);
        return { hours, minutes };
    };

    // Tính duration từ chuỗi thời gian
    const calculateDuration = (timeString) => {
        const [startTime, endTime] = timeString.split(' - ');
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [endHours, endMinutes] = endTime.split(':').map(Number);

        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;

        return endTotalMinutes - startTotalMinutes;
    };

    const handleSaveAvailability = (availabilityData) => {
        console.log('Saved availability:', availabilityData);
        setSavedAvailability(availabilityData);

        // Chuyển đổi availabilityData thành events
        const newEvents = [];
        const dayToDateMap = {
            MON: 18,
            TUE: 19,
            WED: 20,
            THU: 21,
            FRI: 22,
            SAT: 23,
            SUN: 24,
        };

        const timeSlotMap = {
            1: '08:00 - 08:30',
            2: '08:30 - 09:00',
            3: '09:00 - 09:30',
            4: '09:30 - 10:00',
            5: '10:00 - 10:30',
            6: '10:30 - 11:00',
            7: '11:00 - 11:30',
            8: '11:30 - 12:00',
            9: '12:00 - 12:30',
            10: '12:30 - 13:00',
            11: '13:00 - 13:30',
            12: '13:30 - 14:00',
            13: '14:00 - 14:30',
            14: '14:30 - 15:00',
            15: '15:00 - 15:30',
            16: '15:30 - 16:00',
            17: '16:00 - 16:30',
            18: '16:30 - 17:00',
            19: '17:00 - 17:30',
            20: '17:30 - 18:00',
        };

        const colors = ['blue', 'cyan', 'purple', 'green', 'orange', 'pink', 'indigo'];
        let eventId = events.length + 1;

        Object.keys(availabilityData).forEach((day) => {
            const slots = availabilityData[day];
            const dateNum = dayToDateMap[day];

            slots.forEach((slot, index) => {
                const timeString = timeSlotMap[slot.slotId];
                const { hours, minutes } = parseTime(timeString);
                const duration = calculateDuration(timeString);
                const colorIndex = Math.floor(Math.random() * colors.length);

                newEvents.push({
                    id: eventId++,
                    title: 'Available',
                    participant: 'Open Slot',
                    time: timeString,
                    startHour: hours,
                    startMinute: minutes,
                    duration: duration,
                    date: dateNum,
                    color: colors[colorIndex],
                    description: `Available • ${timeString}`,
                    isAvailability: true, // Flag để phân biệt availability events
                });
            });
        });

        // Hợp nhất events cũ và availability mới
        setEvents([...events, ...newEvents]);
    };

    return (
        <SharedLayout activeMenu="schedule">
            {/* Header */}
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

            {/* Modal SetAvailability */}
            <SetAvailability
                isOpen={isAvailabilityOpen}
                onClose={() => setIsAvailabilityOpen(false)}
                onSave={handleSaveAvailability}
            />

            <div className="schedule-content">
                {/* Weekly View */}
                <section className="schedule-section">
                    {/* Week Header */}
                    <div className="week-header">
                        <div className="time-column"></div>
                        {weekDays.map((d) => (
                            <div
                                key={d.date}
                                className={`week-day ${d.active ? 'active' : ''}`}
                                onClick={() => setSelectedDate(d.date)}
                            >
                                <div className="day-name">{d.day}</div>
                                <div className={`day-number ${d.active ? 'active' : ''}`}>{d.date}</div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline */}
                    <div className="schedule-timeline">
                        <div className="time-column">
                            {timeSlots.map((time) => (
                                <div key={time} className="time-slot">
                                    {time}
                                </div>
                            ))}
                        </div>

                        {/* Events Grid */}
                        <div className="events-container">
                            {weekDays.map((d) => (
                                <div key={d.date} className="day-column">
                                    {getEventsByDate(d.date).map((event) => (
                                        <div
                                            key={event.id}
                                            className={`event event-${event.color} ${event.isAvailability ? 'availability' : ''}`}
                                            style={getEventPosition(event)}
                                            title={event.title}
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

                        {/* Current time indicator */}
                        <div className="current-time-indicator" style={{ top: 'calc(11% + 0px)' }}></div>
                    </div>
                </section>

                {/* Right Sidebar - Mini Calendar */}
                <aside className="schedule-right">
                    <div className="mini-calendar">
                        <div className="calendar-header">
                            <button>◀</button>
                            <h3>September 2023</h3>
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
                            {calendarDays().map((day, index) => {
                                // Kiểm tra xem ngày có availability không
                                const hasAvailability = events.some(
                                    (event) => event.date === day && event.isAvailability
                                );

                                return (
                                    <div
                                        key={index}
                                        className={`day ${day === 19 ? 'selected' : ''} ${!day ? 'empty' : ''} ${hasAvailability ? 'has-availability' : ''}`}
                                    >
                                        {day}
                                        {hasAvailability && <div className="availability-dot"></div>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Upcoming Requests */}
                    <div className="upcoming-requests">
                        <div className="requests-header">
                            <h3>Upcoming Requests</h3>
                            <a href="/" className="view-all">View All</a>
                        </div>

                        <div className="requests-list">
                            <div className="request-item">
                                <div className="request-avatar">MA</div>
                                <div className="request-info">
                                    <h4>Maria Sanchez</h4>
                                    <p>Interview Prep • Sep 20</p>
                                </div>
                                <div className="request-actions">
                                    <button className="btn-icon">✓</button>
                                    <button className="btn-icon">✕</button>
                                </div>
                            </div>

                            <div className="request-item">
                                <div className="request-avatar">JS</div>
                                <div className="request-info">
                                    <h4>John Smith</h4>
                                    <p>Resume Review • Sep 21</p>
                                </div>
                                <div className="request-actions">
                                    <button className="btn-icon">✓</button>
                                    <button className="btn-icon">✕</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </SharedLayout>
    );
};

export default WeeklySchedule;