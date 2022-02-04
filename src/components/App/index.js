import React, {useState} from 'react';

import '../App/App.css';
// import 'react-calendar/dist/Calendar.css';

import Banner from '../Banner';
import Calendars from "../Calenders";
import Title from '../Titles';


function App() {
  // const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <Banner/>
      <div className="calendarsContainer">
        <div>
          <Title text="Start Date" className="startDate"/>
          <Calendars className="calendars"/>
        </div>
        <div>
          <Title text="End Date" className="endDate"/>
          <Calendars className="calendars"/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
