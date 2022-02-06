// import React, {useState, useRef} from 'react';
// import Calendar from "react-calendar";

// import 'react-calendar/dist/Calendar.css';
// import "./Calenders.css"

// export default function Calendars() {
//     // const [value, onChange] = useState(new Date());
//   // console.log(value)

//     return (
//       // <div className="calendarCard">
//       //   <Calendar onChange={onChange} value={value} selectRange={Range} returnValue={Range} className="calendar"/>
//       //   {console.log(value)}
//       // </div>
//     );
// }


// struggling to save calendar input on the button click. Had a look at useRef hook. Considering putting calendars and button into one component, then on the button click the calendars will move and the button will be hidden. Actually this won't work because it will create two buttons with the calendars. Need to find another way!
  //As per Arshi's suggestion, using one calendar and selectRange.
  //returnValue should allow dates to be passed by the calendar to the onChange function. Range will cause an array with start and end values to be passed.