import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <img src="LOGO.png" alt="Kasa logo"/>
      <Link to="/">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  )
}

export default Header