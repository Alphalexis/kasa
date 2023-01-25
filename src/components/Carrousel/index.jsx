import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DefaultPicture from '../../assets/images/Background.png'
import left from '../../assets/images/Left.png'
import right from '../../assets/images/Right.png'

const Background = styled.div`

height: 415px;
width: 1240px;
border-radius: 25px;
background-position-x: center;
 background-position-y: center;

 @media (max-width: 400px) {
  height: 255px;
  width: 335px;
  border-radius: 10px;
  background-size: cover;

}
`

let ArrowLeft = styled.img`
position: relative;
bottom: 250px;
left: 24px;


@media (max-width: 400px) {
width: 15px;
bottom: 140px;
left: 10px;
}
`

let ArrowRight = styled.img`
position: relative;
bottom: 250px;
left: 1120px;

@media (max-width: 400px) {
  width: 15px;
  bottom: 140px;
  left: 295px;
  }
`
const Page = styled.p`
position: relative;
width: 50px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* or 26px */

display: flex;
align-items: flex-end;
text-align: center;

color: #FFFFFF;

bottom: 146px;
left: 620px;

@media (max-width: 400px) {
  font-size: 10px;
  bottom: 65px;
  left: 165px;
  }
`
const DivCarrousel = styled.div`
height: 415px;
@media (max-width: 400px) {
  height: 255px;
}
`

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
 display = <><ArrowLeft src={left} onClick={goToPrevious} alt='Left'/><ArrowRight src={right} onClick={goToNext} alt='Right' /><Page>{currentIndex + 1}/{picture.length}</Page></>    
}

    return (
      <DivCarrousel>
        <Background style={{backgroundImage: `url(${picture[currentIndex]})`}} alt='Background'></Background>
        
        {display}
      </DivCarrousel>
    )
  }

  Carrousel.propTypes = {
    picture: PropTypes.array.isRequired,
  }

   Carrousel.defaultProps = {
    picture: DefaultPicture,
  }
  
  
  export default Carrousel