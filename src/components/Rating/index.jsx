import './Rating.css'
import {ReactComponent as StarIcon} from '../../assets/images/Star.svg'
import {ReactComponent as StarBorderIcon} from "../../assets/images/StarEmpty.svg";


function Rating(props){
let {rate} = props;
rate = Number(rate)
    const totalStars = 5;
    return (
      <div>
        <div className='DivRating'>


        {[...new Array(totalStars)].map((arr, index) => {
        return index < rate ? <StarIcon key={index} /> : <StarBorderIcon key={index}/>;
      })}

        </div>
         </div>
    )
  }


  export default Rating