import './tile.css';

export default function Tile ({ ...props }) {
  return <>
    <div className={[`Tile`, props.className].join(' ').trim()}>
      { props.children }
    </div>
  </>; 

}