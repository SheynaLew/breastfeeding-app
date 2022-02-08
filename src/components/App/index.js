import React, {useState} from 'react';

import Calendar from "react-calendar";

import '../App/App.css';
import 'react-calendar/dist/Calendar.css';

import Banner from '../Banner';
import Button from '../Button';
// import Calendars from "../Calenders";
import Title from '../Titles';
import AwardImage from '../AwardImage';

//import awardImages
import amethyst from '../../images/amethyst.png';


// handleClick={submit}


function App() {
  //calendar useState
  const [value, onChange] = useState(new Date());
  const [awardURL, setAwardURL] = useState ("");
  const [awardText, setAwardText] = useState("");
  // const [startTime, setStartTime] = useState(value);
  // const [endTime, setEndTime] = useState(value);
  // const [dateRange, setDateRange]  = useState(0);

  function monthDiff() {
  let range = (value[1].getFullYear() - value[0].getFullYear()) * 12;
  range -= value[0].getMonth();
  range += value[1].getMonth();
  //console.log("total months plus end month", range)
  let startDay = value[0].getDate();
  // console.log(startDay);
  let endDay = value[1].getDate();
  // console.log(endDay);
  //need to include an if else statement so that the date is included and the number of months returned is not rounded up. Eg if someone started feeding on the 7th of the month, but they put their end date as the 6th of the month a year later, they are given 11 months, not 12.
    //get the day of the month from each index of the value array and save to a variable
    //if end day is less than start day, return range -1
    //if end day is equal to or more than start day, return range
    // console.log("range prior to checking statement", range)
    if (endDay < startDay) {
      console.log("endDay is less than startDay", range -1)
      return range -1;
    } else {
      console.log("endDay is greater than or equal to startDay", range)
      return range
    }
  }
  function getBreastfeedingAward() {
    //A function which takes the month difference (monthDiff function) and returns a breastfeeding award and text.
    monthDiff()
    setAwardURL(amethyst);
    setAwardText("CONGRATULATIONS! You have been breastfeeding for 4 years! You have earned Amethyst boobs!")
    return (awardURL, awardText)
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
      <Button handleClick={getBreastfeedingAward} text={"submit"}/>
      <div className="award">
        <AwardImage url={awardURL} altText={awardText}/>
      </div>
    </div>
  ) 
}



export default App;
