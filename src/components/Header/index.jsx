import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import './Header.css'


function Header() {
  return (
    <nav>
      <div className='DivHeader'>
      <img className='Ratio' src={logo} alt="Kasa logo"/>
      <div className='DivLink'>
        <Link className='Link' to="/" >Accueil</Link>
      <Link className='Link' to="/about">A Propos</Link>
        </div>
        </div>
    </nav>
  )
}

export default Header