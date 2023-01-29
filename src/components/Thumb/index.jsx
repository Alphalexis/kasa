import PropTypes from 'prop-types'
import './Thumb.css'
import DefaultThumb from '../../assets/images/ImgThumb.png'
import { Link } from 'react-router-dom'



function Thumb({cover, title, id}) {

    return (
      
        <Link className='LinkThumb' to={`logement/${id}`}>
        <img className='BackgroundSectionThumb' src={cover} key={id} alt="Thumb"/>
        <h3 className='TextTitreThumb'>{title}</h3>
        </Link>
      
    )
  }

  Thumb.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  Thumb.defaultProps = {
    cover: DefaultThumb,
    title:'',
    id:'',
  }
  
  export default Thumb