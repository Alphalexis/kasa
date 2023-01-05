import styled from 'styled-components'
import { Link } from 'react-router-dom'


const DivDisplay = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
margin-bottom: 96px;
`

const D404 = styled.h1`
font-family: Montserrat;
font-size: 288px;
font-weight: 700;
line-height: 411px;
letter-spacing: 0em;
text-align: center;
color: #FF6060;
margin:0
`

const Oups = styled.h1`
display: flex;
justify-content: center;
height: 51px;
width: 872px;
left: 295px;
top: 606px;
font-weight: 500;
border-radius: nullpx;
color: #FF6060;
`
const StyledLink = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
/* or 34px */


text-decoration-line: underline;

color: #FF6060;
text-decoration: none;
`


function Error() {
  
    return (
      <div>
        <DivDisplay>
        <D404>404</D404>
        <Oups>Oups! La page que vous demandez n'existe pas.</Oups>
        <StyledLink to="/" >Retourner sur la page d’accueil</StyledLink>
        </DivDisplay>
      </div>
    )
  }
  
  export default Error