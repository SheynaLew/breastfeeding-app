import React, {useState} from 'react';

import '../App/App.css';
// import 'react-calendar/dist/Calendar.css';

import Banner from '../Banner';
import Button from '../Button';
import Calendars from "../Calenders";
import Title from '../Titles';

// handleClick={submit}


function App() {

  return (
  //   //useStates
  //   const [startDate, setStartDate] = useState()
  //   const [endDate, setEndDate] = useState()

  //   //submit function for button click
  //   function submit (){
  //   setStartDate() 
  //   }

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
      <Button  text={"submit"}/>
    </div>
  ) 
}

export default App;
