import { useEffect, useState } from 'react';
import Modal from './Modal';
import DateUtils from '../../utils/DateUtils';
import './modalevent.css';

export default function ModalEvent ({isOpen, date, afterClose, onAddEvent, ...props }) {
  const [ eventText, setEventText ] = useState("");
  const Utils = DateUtils();

  const onKeyDown = event => event.key === 'Enter' && addEvent();
  const addEvent = () => {
    onAddEvent({"text": eventText, "date":  Utils.formatYYYmmmddd(date)})
    setEventText("");
  }

  useEffect(() => {
    document.querySelector('[name=eventText]').focus()
  }, [isOpen])
  return <Modal isOpen={ isOpen } date={ date } afterClose={ afterClose }>
    <div className="Input__wrapper">
      <label htmlFor='eventText'>Evento:</label>
      <input className="Input" value={ eventText } name="eventText" placeholder="Nome do evento" onKeyDown={ onKeyDown } onChange={e => setEventText(e.target.value)}/>
      <button className="FormButton" onClick={ addEvent }>Adicionar</button>
    </div>
  </Modal>
    
}