export default function DateUtils () {
  const splitDate = date => date.split('-');
  const getYear = date => Number(splitDate(date)[0]);
  const getMonth = date => splitDate(date)[1];
  const getZeroIndexMonth = date => Number(getMonth(date)) - 1
  const getFirstWeekDay = date => new Date(getYear(date), getZeroIndexMonth(date), 1).getDay()
  const getLastMonthDay = date => new Date(getYear(date), getZeroIndexMonth(date) + 1, 0).getDate();
  const addLeadingZero = number => ('0' + number).slice(-2);
  const formatYYYmmmddd = date => {
    const d = new Date(date);
    return `${d.getFullYear()}-${addLeadingZero(d.getMonth() + 1)}-${addLeadingZero(d.getDate())}`;
  }

  return {
    splitDate, getYear, getMonth, getZeroIndexMonth, getFirstWeekDay, getLastMonthDay, formatYYYmmmddd
  }
}