import { useState } from 'react';
import Tile from './../Tile/Tile';

import DateEvent from './../DateEvent/DateEvent';

import './day.css';


export default function Day ({ date, onEventAddClick, events=[], ...props }) {
  const dateObject = new Date(...Object.values(date));
  const [ dateEvents, setDateEvents ] = useState(events);

  return <>
  <Tile className={`Day ${props.className}`}>
    <div className="Day__header">
      <div className="Day__number">{ dateObject.getDate() }</div>
      <button className="Day__add-event-button" onClick={() => onEventAddClick(`${dateObject}`)}>+</button>

    </div>
      <div className="Day__content">
        <DateEvent events={ events } />
      </div>
  </Tile>
  </>; 

}