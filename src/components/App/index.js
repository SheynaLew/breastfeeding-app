import React, {useState} from 'react';
import Calendar from "react-calendar";

//import css
import '../App/App.css';
import 'react-calendar/dist/Calendar.css';

//import components
import Banner from '../Banner';
import Button from '../Button';
import Title from '../Titles';
import AwardImage from '../AwardImage';
import awards from '../../db/awards';

//import awardImages
import imageText from '../../images/imageText.png';
import glitter from '../../images/glitter.png'
import bronze from '../../images/bronze.png';
import silver from '../../images/silver.png';
import ruby from '../../images/ruby.png';
import gold from '../../images/gold.png';
import platinum from '../../images/platinum.png';
import diamond from '../../images/diamond.png';
import jade from '../../images/jade.png';
import sapphire from '../../images/sapphire.png';
import amethyst from '../../images/amethyst.png';
import superstar from '../../images/superstar.png';

function App() {
  const [value, onChange] = useState(new Date());
  const [awardURL, setAwardURL] = useState ("");
  const [awardText, setAwardText] = useState("");


  function getBreastfeedingAward() {
  let range = (value[1].getFullYear() - value[0].getFullYear()) * 12;
  range -= value[0].getMonth();
  range += value[1].getMonth();
  let startDay = value[0].getDate();
  let endDay = value[1].getDate();

  //need to include an if else statement so that the date is included and the number of months returned is not rounded up. Eg if someone started feeding on the 7th of the month, but they put their end date as the 6th of the month a year later, they are given 11 months, not 12.
    //get the day of the month from each index of the value array and save to a variable
    //if end day is less than start day, return range -1
    //if end day is equal to or more than start day, return range
    // console.log("range prior to checking statement", range)
    if (endDay < startDay) {
      range -=1;
      console.log(range)
    } else {
      range = range
      console.log(range)
    }

    //get correct awards and text for months feeding
      //if statement and spread awards array
    let spreadAwards=[...awards]
    if (range <1) {
      setAwardURL(imageText);
      setAwardText(spreadAwards[11].award_text_award);
    } else if (range < 3) {
        setAwardURL(glitter);
        setAwardText(spreadAwards[0].award_text_award);
    }
      else if (range < 6) {
        setAwardURL(bronze);
        setAwardText(spreadAwards[1].award_text_award);
    }
      else if (range < 9) {
        setAwardURL(silver);
        setAwardText(spreadAwards[2].award_text_award);
    }
      else if (range < 12) {
        setAwardURL(ruby);
        setAwardText(spreadAwards[3].award_text_award);
    }
      else if (range < 18) {
        setAwardURL(gold);
        setAwardText(spreadAwards[4].award_text_award);
    }
      else if (range <24) {
        setAwardURL(platinum);
        setAwardText(spreadAwards[5].award_text_award);
    }
      else if (range < 30) {
        setAwardURL(diamond);
        setAwardText(spreadAwards[6].award_text_award);
    }
      else if (range < 36) {
        setAwardURL(jade);
        setAwardText(spreadAwards[7].award_text_award);
    }
      else if (range < 48) {
        setAwardURL(sapphire);
        setAwardText(spreadAwards[8].award_text_award);
    }
      else if (range < 60) {
        setAwardURL(amethyst);
        setAwardText(spreadAwards[9].award_text_award);
    }
      else if (range >= 60) {
        setAwardURL(superstar);
        setAwardText(spreadAwards[10].award_text_award);
    }
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
        <AwardImage src={awardURL} altText={awardText}/>
        <h1>{awardText}</h1>
      </div>
    </div>
  ) 
}



export default App;
