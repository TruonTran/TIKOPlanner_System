/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './SetAvailability.css';

// ===== LẤY TUẦN HIỆN TẠI (NGÀY THỰC) =====
const getCurrentWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sun) -> 6 (Sat)
  const monday = new Date(today);

  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  monday.setDate(today.getDate() + diff);

  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    week.push({
      key: date.toISOString().split('T')[0], // YYYY-MM-DD
      label: date.toLocaleDateString('vi-VN', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
      }),
    });
  }
  return week;
};

const SetAvailability = ({ isOpen, onClose, onSave }) => {
  const [selectedSlots, setSelectedSlots] = useState({});
  const [slotsByDay, setSlotsByDay] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // ===== DAYS = NGÀY THỰC =====
  const days = React.useMemo(() => getCurrentWeek(), []);

  const timeSlots = React.useMemo(
    () => [
      { id: 1, time: '07:00 - 09:15' },
      { id: 2, time: '09:30 - 11:45' },
      { id: 3, time: '13:00 - 15:15' },
      { id: 4, time: '15:30 - 17:45' },
      { id: 5, time: '18:00 - 19:00' },
      { id: 6, time: '19:00 - 20:00' },
      { id: 7, time: '20:00 - 21:00' },
      { id: 8, time: '21:00 - 22:00' },
    ],
    []
  );

  // ===== INIT STATE (GIỮ LOGIC) =====
  useEffect(() => {
    const initialSelected = {};
    const initialCount = {};

    days.forEach((day) => {
      initialSelected[day.key] = {};
      initialCount[day.key] = 0;
      timeSlots.forEach((slot) => {
        initialSelected[day.key][slot.id] = false;
      });
    });

    setSelectedSlots(initialSelected);
    setSlotsByDay(initialCount);
  }, [days, timeSlots]);

  const handleSlotToggle = (dayKey, slotId) => {
    const currentCount = slotsByDay[dayKey] || 0;
    const isSelected = selectedSlots[dayKey]?.[slotId];

    if (isSelected) {
      setSelectedSlots({
        ...selectedSlots,
        [dayKey]: {
          ...selectedSlots[dayKey],
          [slotId]: false,
        },
      });
      setSlotsByDay({
        ...slotsByDay,
        [dayKey]: currentCount - 1,
      });
      return;
    }

    if (currentCount < 3) {
      setSelectedSlots({
        ...selectedSlots,
        [dayKey]: {
          ...selectedSlots[dayKey],
          [slotId]: true,
        },
      });
      setSlotsByDay({
        ...slotsByDay,
        [dayKey]: currentCount + 1,
      });
    } else {
      setErrorMessage('⚠️ Tối đa 3 slot mỗi ngày!');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // ===== SAVE (GIỮ NGUYÊN LOGIC) =====
  const handleSaveAvailability = () => {
    const hasAny = Object.values(slotsByDay).some((c) => c > 0);
    if (!hasAny) {
      setErrorMessage('⚠️ Vui lòng chọn ít nhất 1 slot!');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const availabilityData = {};
    days.forEach((day) => {
      availabilityData[day.key] = timeSlots
        .filter((slot) => selectedSlots[day.key]?.[slot.id])
        .map((slot) => ({
          slotId: slot.id,
          time: slot.time,
        }));
    });

    setSuccessMessage('✅ Lưu lịch dạy thành công!');
    setTimeout(() => {
      setSuccessMessage('');
      onSave && onSave(availabilityData);
      handleClose();
    }, 1500);
  };

  const handleClearDay = (dayKey) => {
    const reset = {};
    timeSlots.forEach((slot) => (reset[slot.id] = false));
    setSelectedSlots({ ...selectedSlots, [dayKey]: reset });
    setSlotsByDay({ ...slotsByDay, [dayKey]: 0 });
  };

  const handleClearAll = () => {
    const resetSelected = {};
    const resetCount = {};

    days.forEach((day) => {
      resetSelected[day.key] = {};
      resetCount[day.key] = 0;
      timeSlots.forEach((slot) => {
        resetSelected[day.key][slot.id] = false;
      });
    });

    setSelectedSlots(resetSelected);
    setSlotsByDay(resetCount);
  };

  const handleClose = () => {
    setErrorMessage('');
    setSuccessMessage('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="availability-modal-overlay">
      <div className="availability-modal">
        <div className="modal-header">
          <h2>Set Availability</h2>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="modal-content">
          <p className="modal-subtitle">
            Chọn slot dạy (tối đa 3 slot/ngày)
          </p>

          <div className="availability-grid">
            {/* SLOT COLUMN */}
            <div className="time-column">
              <div className="time-header">Slot</div>
              {timeSlots.map((slot) => (
                <div key={slot.id} className="time-slot-item">
                  <div className="slot-id">Slot {slot.id}</div>
                  <div className="slot-time">{slot.time}</div>
                </div>
              ))}
            </div>

            {/* DAYS */}
            {days.map((day) => (
              <div key={day.key} className="day-column">
                <div className="day-header">
                  <div className="day-name">{day.label}</div>
                  <div className="slot-count">{slotsByDay[day.key] || 0}/3</div>
                </div>

                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`slot-cell ${selectedSlots[day.key]?.[slot.id] ? 'selected' : ''}`}
                    onClick={() => handleSlotToggle(day.key, slot.id)}
                  >
                    {selectedSlots[day.key]?.[slot.id] && (
                      <div className="slot-check">✓</div>
                    )}
                  </div>
                ))}

                {slotsByDay[day.key] > 0 && (
                  <button
                    className="clear-day-btn"
                    onClick={() => handleClearDay(day.key)}
                  >
                    Xóa
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={handleClearAll}>
            Xóa tất cả
          </button>
          <div className="footer-actions">
            <button className="btn-secondary" onClick={handleClose}>Hủy</button>
            <button className="btn-primary" onClick={handleSaveAvailability}>
              Lưu lịch dạy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetAvailability;
