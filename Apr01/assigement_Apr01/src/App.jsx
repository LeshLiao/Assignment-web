import { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Page from './Page.jsx';
import './App.css'

import MyTable from './MyTable.jsx';
import { useContext } from 'react';
import { DataContext } from './DataContext.jsx';


function App() {
  const [date, setDate] = useState(new Date());
  const [countdown, setCountdown] = useState(0);

  const data = useContext(DataContext);

  useEffect(() => {
    var today = new Date();
    var timeinmilisec = date.getTime() - today.getTime();
    setCountdown(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
  }, [date]);

  return (
    <>
      {/* <Page/> */}
      <DataContext.Provider value={data}>
        <MyTable/>
      </DataContext.Provider>

      <h3>Today: {new Date().toDateString()}</h3>
      <h3>DatePicker: {date.toDateString()}</h3>
      <h3>Countdown: {countdown} days from now.</h3>
      Pick one day here:<DatePicker selected={date} onChange={(date) => setDate(date)} />
    </>
  )
}

export default App
