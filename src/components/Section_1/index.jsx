import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/images/IMGSection.png'



let TextSection = styled.h2`
height: 223px;
width: 1240px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
/* or 68px */
display: flex;
z-index:2;
margin: 0;
align-items: center;
    color: #FFFFFF;
    justify-content: center;

@media (max-width: 400px) {
position: relative;
width:300px;
font-size: 24px;
bottom:50px;
left: 15px;
}
`
const DivSection = styled.div`
background-color: black;
height: 223px;
width: 1240px;
object-fit: fill;
border-radius: 25px;
@media (max-width: 400px) {
width:350px;
height:111px;
}
`
const DivDisplay = styled.div`
display: flex;
justify-content: center;
margin-bottom: 43px;
margin-top: 50px;
`
const BackgroundSection = styled.img`

object-fit: fill;
border-radius: 25px;
opacity: 0.6;
bottom:223px;
position: relative;
mix-blend-mode: lighten;
@media (max-width: 400px) {
  width:350px;
  height:111px;
  }
`


function Section({picture, text}) {

    return (
      <div> 
        <DivDisplay>
            <DivSection>
            <TextSection>{text}</TextSection>
            <BackgroundSection src={picture}  alt="Section"/>
            </DivSection>
            </DivDisplay>
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