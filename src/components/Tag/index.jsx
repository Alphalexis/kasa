import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextTag = styled.h3`
position: static;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;


color: #FFFFFF;

background: #FF6060;
border-radius: 10px;
padding: 0px 15px;

width: fit-content;
height: 25px;

@media (max-width: 400px) {
  font-size: 10px;
  padding: 2px 15px 2px 10px;
  border-radius: 5px;
  height: 18px;
}
`

function Tag(props) {
let {text} = props;
console.log(text, "text de tag", typeof text)
    return (
      <div>
        <TextTag>{text}</TextTag>        
      </div>
    )
  }

  Tag.propTypes = {
    text: PropTypes.string.isRequired
  }

  Tag.defaultProps = {
    text:''
  }
  
  
  export default Tag