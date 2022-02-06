import React, {useState} from 'react';

import Calendar from "react-calendar";

import '../App/App.css';
import 'react-calendar/dist/Calendar.css';

import Banner from '../Banner';
import Button from '../Button';
// import Calendars from "../Calenders";
import Title from '../Titles';

// handleClick={submit}


function App() {
  //calendar useState
  const [value, onChange] = useState(new Date());
  const [lengthOfTime, setLengthOfTime] = useState();

  function lengthOfTimeFeeding() {
    setLengthOfTime(value[1] - value[0]);
    //the above won't work because the date isn't an integer! need to turn date into integer first
    const timeFeeding = lengthOfTime;
    console.log(timeFeeding)
  }

  return (
    <div className="App">
      <Banner/>
      <div className="calendarsContainer">
        <div>
          <Title text="Journey Dates" className="startDate"/>
          <div className="calendarCard">
            <Calendar onChange={onChange} value={value} selectRange={true} className="calendar"/>
          </div>
        </div>
      </div>
      <Button handleClick={lengthOfTimeFeeding} text={"submit"}/>
    </div>
  ) 
}


export default App;
