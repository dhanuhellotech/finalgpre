import React,{useState} from 'react';
import './Card.css'

const MonthView = ({ month, currentYear, dayNumbers, placeholders, currentDisplayedMonth, importantDays, calendarEvents }) => {
  const [activeDay, setActiveDay] = useState(null);
  const getEventDescription = (day) => {
    // Find the event corresponding to the current day
    const event = calendarEvents.find(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() + 1 === month && eventDate.getDate() === day;
    });
  
    // If event exists, return an object with description and color, otherwise return default description and color
    return event
      ? { description: event.description, color: event.color }
      : { description: "Important Days", color: "white" };
  };
  
  const handleDayClick = (day) => {
    setActiveDay(day === activeDay ? null : day);
  };
  return (
    
    <div style={{ display: month === currentDisplayedMonth ? 'block' : 'none', backgroundImage: `url('assets/img/calendar/top-view-international-worker-s-day-still-life.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh',marginTop:'5%',color:'white'  }}>
      <div id="title" className="center">
        <h1 style={{color:'white',fontSize:'30px',fontFamily:'serif'}}>{new Date(currentYear, month - 1).toLocaleString('default', { month: 'short' })} {currentYear}</h1>
        <p style={{color:'white',fontSize:'30px',fontFamily:'serif'}}>Events and Important days in Gpreschool </p>
      </div>

      <div className="calendar-frame  center">
        {/* Map through the array of day numbers and render each day frame */}
        {month === currentDisplayedMonth && dayNumbers.map(day => (
  <div key={day} className={`day-frame center real ${day === activeDay ? 'active' : ''}`} onClick={() => handleDayClick(day)}>
    <div className="bubbles">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="bubble" style={{ left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random()}s` }}></div>
      ))}
    </div>
    <h2 className="day-number">{day}</h2>
    {/* Display event description with specified color */}
    <div className="day-label center" style={{ color: getEventDescription(day).color }}>{getEventDescription(day).description}</div>
  </div>
))}

        {/* Add placeholder day frames to fill the remaining space in the last row */}
        {month === currentDisplayedMonth && placeholders.slice(0, -5).map((_, i) => ( // Exclude the last placeholder
          <div key={`placeholder-${i}`} className="day-frame placeholder"></div>
        ))}
      </div>
    </div>
  );    
};

export default MonthView;
