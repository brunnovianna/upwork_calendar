import { useEffect, useState } from 'react';
import Tile from './../Tile/Tile';
import Day from './../Day/Day';

import DateUtils from '../../utils/DateUtils';

import { WEEK_DAY_NAMES } from './../../const';
import { EVENTS } from './../../mocks/events';

import './month.css';

export default function Month ({ fullMonth, onEventAddClick, addedEvent}) {

  const [ currentEvents, setCurrentEvents ] = useState([]);

  const Utils = DateUtils();

  const filterEventsByDayAndMonth = (day, month) => currentEvents.filter(({ date }) => Number(Utils.splitDate(date)[2]) === day && Utils.getMonth(date) === month);

  const createGridElement = day => {
    const lastMonthDay = Utils.getLastMonthDay(fullMonth),
          year = Utils.getYear(fullMonth),
          zeroIndexMonth = Utils.getZeroIndexMonth(fullMonth);

    const dayEvents = filterEventsByDayAndMonth(day, Utils.getMonth(fullMonth));
    const findRecentAddedEvent = dayEvents?.find(ev => ev.text === addedEvent?.text)
    return <div className="Month__day-wrapper" role="gridcell" key={ day }>
      { day < 1 || day > lastMonthDay  ? <Tile /> : <Day date={{ year, month: zeroIndexMonth, day }} events={ dayEvents } onEventAddClick={onEventAddClick} className={findRecentAddedEvent ? 'Day--recently-added' : ''}/> }
    </div>
  }

  const getWeekElements = () => {
    let weekElements = [];
    const weekDays = 7,
          lastMonthDay = Utils.getLastMonthDay(fullMonth),
          firstWeekDay = Utils.getFirstWeekDay(fullMonth),
          totalSquares = lastMonthDay + firstWeekDay;

    for (let weekIndex = 0; weekIndex < totalSquares; weekIndex += weekDays) {
      const weekElement = <div className="Month__week" role="row" key={ weekIndex + 1 }>{
        [...new Array(weekDays)].map((day, index) => {
            const dayNumber = 1 + index + weekIndex - firstWeekDay;
            return createGridElement(dayNumber);
        })
      }</div>;

      weekElements.push(weekElement);
    }
    return weekElements;
  }

  
  useEffect(() => {
    const fetchEvents = () => {
      return new Promise((resolve, reject) => {
        // Simulate a rendering ;)
        setTimeout(() => {
          resolve(EVENTS)
        }, 200)
        
      })
    }
  
    fetchEvents()
    .then(events => {
      const thisMonthEvents = events.filter(({ date: eventDate }) => {
        return Utils.getYear(eventDate) === Utils.getYear(fullMonth) && Utils.getZeroIndexMonth(eventDate) === Utils.getZeroIndexMonth(fullMonth)
      });
      setCurrentEvents(thisMonthEvents);
    });
    
  }, [fullMonth]);
  
  useEffect(() => {
    addedEvent && setCurrentEvents(c=> [...c, addedEvent])
  }, [addedEvent]);

  return <>
    <div className="Month">
      <div className="Month__week-days">
      {
        WEEK_DAY_NAMES.map((weekDayObject, index) => { 
          return <div className="Month__week-day" role="columnheader" key={ index }>{ weekDayObject.abbr }</div>
        })
      }
      </div>
      <div className="Month__content">
        {
          getWeekElements().map(weekElement => weekElement)
        }
      </div>
    </div>
  </>;
}