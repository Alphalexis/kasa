import React, { useState } from 'react'
import up from '../../assets/images/Vector.png'
import down from '../../assets/images/Vector-flip.png'
import './Dropdown.css'




function Dropdown({ text, title }) {

  const Display = () => {

    setOpen(!open);
  };

  const [open, setOpen] = useState(false);

  ;

  function Action() {
    Display();
  }
let texttodisplay
  console.log(text, "text de dropdown", typeof text)
  if (Array.isArray(text)) {
    console.log("isArray")
    texttodisplay = (<ul style={{ listStyleType: "none", margin: 0, padding: 0}}>{text.map((item, i) => {
      return <li key={i}> {item} </li>
    })}</ul>)
  }
  else {
    texttodisplay = text;
  }
  return (
    <div className='DivDisplay'>
      <h2 className='TextTitre' onClick={Action}>{title}
        <img src={up} alt="Vector" id='Vector' />
      </h2>
      {open && (
        <><img className='Flip' src={down} alt="Vector" id='Vector-flip' /><h3 className="TextInfo">{texttodisplay}</h3></>
      )}
    </div>
  )
}


export default Dropdown