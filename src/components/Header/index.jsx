import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DivHeader = styled.div`
display: flex;
align-items: center;
text-align: right;
justify-content: space-between;
margin-left: 100px;
margin-top: 40px;
width:1270px;
`

const DivLink = styled.div`
width: 300px;
display: flex;
justify-content: space-around;
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

function Header() {
  return (
    <nav>
      <DivHeader>
      <img src="LOGO.png" alt="Kasa logo"/>
      <DivLink>
        <StyledLink to="/" >Accueil</StyledLink>
      <StyledLink to="/about">A Propos</StyledLink>
        </DivLink>
        </DivHeader>
    </nav>
  )
}

export default Header