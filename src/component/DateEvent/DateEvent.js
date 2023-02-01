import { useState } from 'react';
import './date-event.css';

export default function DateEvent ({ events = [] }) {

  return events.length < 1 ?
    <></> :
    <ul className="DateEvents">
      {
        events.map((event, i) => {
          return  <li className="DateEvent__item" key={ i }>{ event.text }</li>;
        })
      }
    </ul> 
}