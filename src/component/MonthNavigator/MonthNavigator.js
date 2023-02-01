import { useEffect, useState } from 'react';

import DateUtils from '../../utils/DateUtils';

import { MONTH_NAMES } from './../../const';

import "./monthnavigator.css";

export default function MonthNavigator ({ fullMonth, onDateChange=() => {}}) {
  const Utils = DateUtils();

  const [ currentFullMonth, setCurrentFullMonth ] = useState(fullMonth);
  
  const setMonth = (year, month) => {
    const stringMonth =  ("0" + (month + 1)).slice(-2);
    setCurrentFullMonth(`${year}-${stringMonth}`);
  }

  const goToNextMonth = () => {
    const currentZeroIndexMonth = Utils.getZeroIndexMonth(currentFullMonth),
          currentYear = Utils.getYear(currentFullMonth);

    const month = currentZeroIndexMonth < 11 ? currentZeroIndexMonth + 1 : 0;
    const year = month === 0 ? currentYear + 1 : currentYear;

    setMonth(year, month);
  }

  const goToPrevMonth = () => {
    const currentZeroIndexMonth = Utils.getZeroIndexMonth(currentFullMonth),
          currentYear = Utils.getYear(currentFullMonth);

    const month = currentZeroIndexMonth > 0 ? currentZeroIndexMonth - 1 : 11;
    const year = month === 11 ? currentYear - 1 : currentYear;

    setMonth(year, month);
  }

  useEffect(()=>{
    typeof onDateChange === 'function' && onDateChange(currentFullMonth);
  }, [currentFullMonth])

  return <>
    <div className="MonthNavigator">
      <div className="MonthNavigator__prev MonthNavigator__arrow">
        <button className="MonthNavigator__prev-changer-button" onClick={ goToPrevMonth }></button>
      </div>
      <div className="MonthNavigator__year">
        <button className="MonthNavigator__year-changer-button">{ Utils.getYear(currentFullMonth) }</button>
      </div>
      <div className="MonthNavigator__month">
        <button className="MonthNavigator__month-changer-button">{ MONTH_NAMES[Utils.getZeroIndexMonth(currentFullMonth)].abbr }</button>
      </div>
      <div className="MonthNavigator__next MonthNavigator__arrow">
        <button className="MonthNavigator__next-changer-button" onClick={ goToNextMonth }></button>
      </div>
    </div>
  </>; 

}