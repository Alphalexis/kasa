import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/images/IMGSection.png'
import './Section_1.css'


function Section({picture, text}) {

    return (
      <div> 
        <div className='DivSection_1'>
            <div className='DivSection'>
            <h2 className='TextSection'>{text}</h2>
            <img className='BackgroundSection' src={picture}  alt="Section"/>
            </div>
            </div>
      </div>
    )
  }

  Section.propTypes = {
    picture: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  Section.defaultProps = {
    picture: DefaultPicture,
    text:'',
  }
  
  export default Section