import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DefaultPicture from '../../assets/images/Background.png'
import left from '../../assets/images/Left.png'
import right from '../../assets/images/Right.png'
import './Carrousel.css'


function Carrousel({picture}) {
const[currentIndex, setCurrentIndex] = useState(0);

const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picture.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
}

const goToNext = () => {
    const isLastSlide = currentIndex === picture.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
}

let display

if (picture.length > 1) {
 display = <><img className='ArrowLeft' src={left} onClick={goToPrevious} alt='Left'/><img className='ArrowRight' src={right} onClick={goToNext} alt='Right' /><p className='Page'>{currentIndex + 1}/{picture.length}</p></>    
}

    return (
      <div className='DivCarrousel'>
        <div className='Background' style={{backgroundImage: `url(${picture[currentIndex]})`}} alt='Background'></div>
        
        {display}
      </div>
    )
  }

  Carrousel.propTypes = {
    picture: PropTypes.array.isRequired,
  }

   Carrousel.defaultProps = {
    picture: DefaultPicture,
  }
  
  
  export default Carrousel