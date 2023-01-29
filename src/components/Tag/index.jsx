import './Tag.css'
import PropTypes from 'prop-types'


function Tag(props) {
let {text} = props;
console.log(text, "text de tag", typeof text)
    return (
      <div>
        <h3 className='TextTag'>{text}</h3>        
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