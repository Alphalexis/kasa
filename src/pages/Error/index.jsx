import { Link } from 'react-router-dom'
import './Error.css'



function Error() {
  
    return (
      <div>
        <div className='DivError'>
        <h1 className='D404'>404</h1>
        <h1 className='Oups'>Oups! La page que vous demandez n'existe pas.</h1>
        <Link className='LinkError' to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    )
  }
  
  export default Error