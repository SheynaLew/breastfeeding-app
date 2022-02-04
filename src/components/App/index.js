import React, {useState} from 'react';

import '../App/App.css';
// import 'react-calendar/dist/Calendar.css';

import Banner from '../Banner';
import Calendars from "../Calenders";


function App() {
  // const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <Banner/>
        <Calendars/>
    </div>
  );
}

export default App;
