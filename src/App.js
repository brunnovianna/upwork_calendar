import Month from './component/Month/Month';
import MonthNavigator from './component/MonthNavigator/MonthNavigator';
import ModalEvent from './component/Modal/ModalEvent';

import './App.css';
import { useEffect, useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {
  const TODAY = new Date(),
        [ currentFullMonth, setCurrentFullMonth ] = useState(`${TODAY.getFullYear()}-${('0' + Number(TODAY.getMonth()+ 1)).slice(-2)}`),
        [ eventModalIsOpen, setEventModalIsOpen ] = useState(false),
        [ currentDate, setCurrentDate ] = useState(new Date()),
        [ addedEvent,  setAddedEvent ] = useState(''); 

  const addEvent = event => {
    setAddedEvent(event);
    setEventModalIsOpen(false);
  }

  return (
    <div className="Upwork_Calendar">
      <MonthNavigator fullMonth={ currentFullMonth } onDateChange={ setCurrentFullMonth } />
      <Month addedEvent={ addedEvent } fullMonth={ currentFullMonth } onEventAddClick={(date) => { setCurrentDate(new Date(date)); setEventModalIsOpen(true)}}/> 
      <ModalEvent  date={ currentDate } isOpen={eventModalIsOpen} afterClose={() => {setEventModalIsOpen(false)}} onAddEvent={ addEvent } />
    </div>
  );
}

export default App;
