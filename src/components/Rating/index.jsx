import styled from 'styled-components'
import PropTypes from 'prop-types'
import {ReactComponent as StarIcon} from '../../assets/images/Star.svg'
import {ReactComponent as StarBorderIcon} from "../../assets/images/StarEmpty.svg";




const DivHeader = styled.div`
display: flex;
`


function Rating(props){
let {rate} = props;
rate = Number(rate)
    const totalStars = 5;
    return (
      <div>
        <DivHeader>


        {[...new Array(totalStars)].map((arr, index) => {
          console.log(index,"index",typeof index);
          console.log(rate,"rate", typeof rate);
        return index < rate ? <StarIcon key={index} /> : <StarBorderIcon key={index}/>;
      })}

        </DivHeader>
         </div>
    )
  }

  Rating.propTypes = {
    rate: PropTypes.number.isRequired,
  }



  export default Rating