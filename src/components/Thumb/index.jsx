import styled from 'styled-components'



const TextTitre = styled.h3`
position: absolute;
height: 52px;
width: 300px;
left: 0px;
top: 406px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* or 26px */

display: flex;
align-items: flex-end;

color: #FFFFFF;

background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
border-radius: 10px;
height: 340px;
width: 320px;
border-radius: 10px;

padding-bottom: 20px;
padding-left: 20px
`
function Thumb() {

    return (
      <div>
        <img src="imgThumb.png" alt="Thumb"/>
        <TextTitre>Titre de la location</TextTitre>
        
      </div>
    )
  }
  
  export default Thumb