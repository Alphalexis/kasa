import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultThumb from '../../assets/images/ImgThumb.png'
import { Link } from 'react-router-dom'

const BackgroundSection = styled.img`
height: 340px;
width: 340px;
left: 0px;
top: 0px;
border-radius: 10px;
object-fit: cover;
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
const StyledLink = styled(Link)`
text-decoration: none;
position: relative;
height: 340px;
margin-bottom: 50px
`

function Thumb({cover, title, id}) {

    return (
      
        <StyledLink to={`logement/${id}`}>
        <BackgroundSection src={cover} key={id} alt="Thumb"/>
        <TextTitre>{title}</TextTitre>
        </StyledLink>
      
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