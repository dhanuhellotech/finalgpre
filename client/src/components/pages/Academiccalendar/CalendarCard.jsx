import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MonthView from './MonthView'; // Import the MonthView component
import './Card.css'
import { client,imageUrl } from '../../clientaxios/Client';
const Calendar = () => {
  const [importantDays, setImportantDays] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [dataReceived, setDataReceived] = useState(false); // State to track whether data has been received

  // Function to get the number of days in a specific month and year
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    async function fetchData() {
      await fetchImportantDays();
      await fetchCalendarEvents();
      generateCalendarData();
      setDataReceived(true); // Set dataReceived to true after fetching data
    }
    fetchData();
  }, []);

  const fetchImportantDays = async () => {
    try {
      const response = await client.get('/important-days');
      setImportantDays(response.data);
    } catch (error) {
      console.error('Error fetching important days:', error);
    }
  };

  const fetchCalendarEvents = async () => {
    try {
      const response = await client.get('/calendar');
      setCalendarEvents(response.data);
    } catch (error) {
      console.error('Error fetching calendar events:', error);
    }
  };

  const generateCalendarData = () => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // January is 1, December is 12
    const data = months.map(month => {
      const daysInMonth = getDaysInMonth(month, currentYear);
      const dayNumbers = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      const placeholders = Array.from({ length: 7 - (daysInMonth % 7) }, (_, i) => i);
      return {
        month,
        dayNumbers,
        placeholders
      };
    });
    setCalendarData(data);
  };

  return (
    <div>
      {/* Current Month Calendar */}
      <div style={{ display: 'block' }}>
        {calendarData.map(({ month, dayNumbers, placeholders }) => (
          <MonthView
            key={month}
            month={month}
            currentYear={currentYear}
            dayNumbers={dayNumbers}
            placeholders={placeholders}
            currentDisplayedMonth={currentMonth}
            importantDays={importantDays}
            calendarEvents={calendarEvents}
            dataReceived={dataReceived} // Pass dataReceived prop to MonthView component
          />
        ))}
      </div>

      {/* Slider for other months */}
      <div style={{ display: 'block' }}>
        {/* Navigation buttons */}
        <div className="center">
          <button onClick={() => setCurrentMonth(prevMonth => prevMonth === 1 ? 12 : prevMonth - 1)}>
            Previous Month
          </button>
          <button onClick={() => setCurrentMonth(nextMonth => nextMonth === 12 ? 1 : nextMonth + 1)}>
            Next Month
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
