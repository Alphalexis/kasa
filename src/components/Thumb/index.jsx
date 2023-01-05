import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultThumb from '../../assets/images/ImgThumb.png'



const DivThumb = styled.div`
height: 400px;
`

const TextTitre = styled.h3`
position: relative;
height: 52px;
width: 300px;
left: 0px;
top: -382px;


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* or 26px */

display: flex;
align-items: flex-end;

color: #FFFFFF;

background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
border-radius: 10px;
height: 340px;
width: 320px;
border-radius: 10px;

padding-bottom: 20px;
padding-left: 20px
`
function Thumb({cover, title}) {

    return (
      <DivThumb>
        <img src={cover} alt="Thumb"/>
        <TextTitre>{title}</TextTitre>
        
        </DivThumb>
    )
  }

  Thumb.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  Thumb.defaultProps = {
    cover: DefaultThumb,
    title:'',
  }
  
  export default Thumb