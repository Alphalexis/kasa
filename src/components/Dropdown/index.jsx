import styled from 'styled-components'
import React, { useState } from 'react'
import up from '../../assets/images/Vector.png'
import down from '../../assets/images/Vector-flip.png'

const TextTitre = styled.h2`
position: relative;
top:20px;

color: #FFFFFF;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: center;
background: #FF6060;
border-radius: 10px;

height: 42px;
width: 100%;
border-radius: 10px;
padding: 5px 20px;
justify-content: space-between;

@media (max-width: 400px) {
  height: 30px;
width: 335px;

  font-size: 13px;
  padding: 2px 5px;
  border-radius: 5px;
}
`

let TextInfo = styled.h3`

display: flex;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 142.6%;

background: #F7F7F7;
border-radius: 10px;
width: 100%;
padding: 30px 20px;
margin-top: -16px;

color: #FF6060;

@media (max-width: 400px) {
  font-weight: 400;
  font-size: 12px;
  line-height: 142.6%;
  width: 305px;
  padding: 20px 20px;
}

`

const DivDisplay = styled.div`
width 70%
`

const Flip = styled.img`
position: relative;
bottom: 30px;
left: 98.8%;

@media (max-width: 400px) {
  left:133%;
  bottom: 16px;
}
`


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
    <DivDisplay>
      <TextTitre onClick={Action}>{title}
        <img src={up} alt="Vector" id='Vector' />
      </TextTitre>
      {open && (
        <><Flip src={down} alt="Vector" id='Vector-flip' /><TextInfo className="Display">{texttodisplay}</TextInfo></>
      )}
    </DivDisplay>
  )
}


export default Dropdown