import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/LOGO.png'

const DivHeader = styled.div`
display: flex;
align-items: center;
text-align: right;
justify-content: space-between;
margin-left: 100px;
margin-top: 40px;
width:88%;
@media (max-width: 400px) {
  width:330px;
  margin-left: 30px;
}
`

const DivLink = styled.div`
width: 300px;
display: flex;
justify-content: space-around;
@media (max-width: 400px) {
  font-size: 12px;
  width: 150px;
}
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
@media (max-width: 400px) {
  font-size: 12px;
}
`
let Ratio = styled.img`
@media (max-width: 400px) {
  width: 130px;
}
`

function Header() {
  return (
    <nav>
      <DivHeader>
      <Ratio src={logo} alt="Kasa logo"/>
      <DivLink>
        <StyledLink to="/" >Accueil</StyledLink>
      <StyledLink to="/about">A Propos</StyledLink>
        </DivLink>
        </DivHeader>
    </nav>
  )
}

export default Header