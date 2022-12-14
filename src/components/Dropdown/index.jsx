import styled from 'styled-components'

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

height: 52px;
width: 530px;
border-radius: 10px;
padding: 5px;

`

const TextInfo = styled.h3`


font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 142.6%;

background: #F7F7F7;
border-radius: 10px;
width: 500px;
padding: 30px 20px;


color: #FF6060;`


function Dropdown() {

    return (
      <div>
        <TextTitre>Description</TextTitre>
        <TextInfo>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). </TextInfo>
      </div>
    )
  }
  
  export default Dropdown