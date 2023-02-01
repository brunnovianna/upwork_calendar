import './modal.css';

export default function Modal ({isOpen,  date, afterClose, ...props }) {

  return <>
    <div className={ [`Modal ${isOpen ? 'open' : ''}`, props.className].join(' ').trim() }>
      <div className="Modal__box">
        <div className="Modal__header">
          <div className="Modal__title">Add event: { date?.toDateString() }</div>
          <button onClick={ () => afterClose() }>x</button>
        </div>
        <div className="Modal__body">
          { props.children }
        </div>
      </div>
      
    </div>
  </>
}