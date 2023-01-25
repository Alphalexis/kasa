import styled from 'styled-components'
import logo from '../../assets/images/LOGOFooter.png'

const DivFooter = styled.div`
background-color: black;
padding: 50px 30px 30px 30px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 400px) {
width: 100%
padding:0
}
`

const TextFooter = styled.h2`
color: white;
font-family: Montserrat;
font-size: 24px;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
@media (max-width: 400px) {
  font-size: 12px;
}
`

function Footer() {
  return (
    <DivFooter>
          <img src={logo} alt="Kasa logo"/>
    <TextFooter>© 2020 Kasa. All rights reserved</TextFooter>
  </DivFooter>
  )
}

export default Footer