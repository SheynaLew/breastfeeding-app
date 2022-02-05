import React, {useState} from 'react';
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';
import "./Calenders.css"

export default function Calendars() {
    const [value, onChange] = useState(new Date());

    return (
      <div className="calendarCard">
        <Calendar onChange={onChange} value={value} className="calendar"/>
        {console.log(value)}
      </div>
    );
}