import styled from 'styled-components'
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import up from '../../assets/images/Vector.png'
import down from '../../assets/images/Vector-flip.png'

const TextTitre = styled.h2`
position: relative;
top:25px;

color: #FFFFFF;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 34.22px;
/* identical to box height, or 26px */

display: flex;
align-items: center;
background: #FF6060;
border-radius: 10px;

height: 42px;
width: 100%;
border-radius: 5px;
padding: 5px 20px;
justify-content: space-between;

@media (max-width: 400px) {
  height: 30px;
width: 335px;

  font-size: 13px;
  padding: 2px 5px;
}
`

let TextInfo = styled.h3`


font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 34.22px;

background: #F7F7F7;
border-radius: 5px;
width: 100%;
padding: 30px 20px;
margin-top: -16px;


color: #FF6060;

@media (max-width: 400px) {
  font-weight: 400;
  font-size: 12px;
  line-height: 142.6%;
  width: 305px;
}

`
const DivDisplay = styled.div`
width 50%
`

const Flip = styled.img`
position: relative;
bottom: 30px;
left: 99%;
@media (max-width: 400px) {
  left:185%;
  bottom: 11px;
}
`



function Dropdown({text,title}) {

  const Display = () => {
    
    setOpen(!open);
  };
  
  const [open, setOpen] = useState(false);

;

function Action() {
  Display();
}

    return (
      <DivDisplay>
        <TextTitre onClick={Action}>{title}
        <img src={up} alt="Vector" id='Vector'/>
        </TextTitre>
        {open && (
        <><Flip src={down} alt="Vector" id='Vector-flip' /><TextInfo className="Display">{text}</TextInfo></>
        )}
        </DivDisplay>
    )
  }

  Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  Dropdown.defaultProps = {
    title:'',
    text:'',
  }
  
  export default Dropdown