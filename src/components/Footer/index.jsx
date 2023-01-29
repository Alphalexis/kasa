import logo from '../../assets/images/LOGOFooter.png'
import './Footer.css'

function Footer() {
  return (
    <div className='DivFooter'>
          <img src={logo} alt="Kasa logo"/>
    <h2 className='TextFooter'>© 2020 Kasa. All rights reserved</h2>
  </div>
  )
}

export default Footer