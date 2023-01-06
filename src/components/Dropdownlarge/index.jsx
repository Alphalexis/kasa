import styled from 'styled-components'
import React, { useState } from 'react';
import PropTypes from 'prop-types'

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


color: #FF6060;


`
const DivDisplay = styled.div`
width 70%
`



function Dropdown({text,title}) {

  const Display = () => {
    
    setOpen(!open);
  };
  
  const [open, setOpen] = useState(false);

  const Rotate = () => {

    var rotated = false;
    document.getElementById('Vector').onclick = function(){
      var div = document.getElementById('Vector'),
        angle = rotated ? 0 : 180;

    div.style.mozTransform    = 'rotate('+ angle +'deg)'; 
    div.style.msTransform     = 'rotate('+ angle +'deg)'; 
    div.style.oTransform      = 'rotate('+ angle +'deg)'; 
    div.style.transform       = 'rotate('+ angle +'deg)'; 
    
    rotated = !rotated;
}

    
  };

function Action() {
  Rotate();
  Display();
}

    return (
      <DivDisplay>
        <TextTitre onClick={Action}>{title}
        <img src="Vector.png" alt="Vector" id='Vector'/>
        </TextTitre>
        {open && (
        <TextInfo className="Display">{text}</TextInfo>
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