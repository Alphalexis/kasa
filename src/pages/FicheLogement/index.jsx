import styled from 'styled-components'
import data from '../../logements.json'
import Rating from "../../components/Rating"
import Carrousel from '../../components/Carrousel'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
import {  useParams } from "react-router-dom";

console.log(data, 'data dans logement')

const HostName = styled.h3`
font-family: Montserrat;
font-family: Montserrat;
font-size: 18px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0em;
text-align: right;
color: #FF6060;
width: 100px;
margin: 0;

`

const PlaceName = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
margin: 0px;

display: flex;
align-items: flex-end;

color: #FF6060;
`

const Location = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;

color: #FF6060;
`

const HostPic = styled.img`
width: 64px;
height: 64px;
border-radius: 50%;
`
const DivGlobal = styled.div`
display: flex;
justify-content: center;
margin-bottom: 120px;
`

const DivMain = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 1220px;
height: 850px;
margin-top: 25px;
margin-bottom: 15px;

`

const DivTitle = styled.div`
display: flex;
justify-content: space-between;
    margin-top: 25px;
    width: 100%
`

const DivName = styled.div`
display: flex;
flex-direction: column;
column-gap: 15px;
`
const DivPic = styled.div`
display: flex;
column-gap: 15px;
`
const DivRate = styled.div`
display: flex;
justify-content: space-between;
width: 100%
`
const DivTag = styled.div`
display: flex;
column-gap: 15px;
`

const DivDrop = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
column-gap: 13%;

`


function FicheLogement() {

  let { id } = useParams();

  console.log(id, "id");

  const item = data.find(element => element.id === id);

  console.log(item, "item");

  const description = item.description
console.log (description, "description")

const equipments = item.equipments
console.log (equipments, "equipments", typeof equipments)

const rating = item.rating
console.log (rating, "rating")

const host = item.host
console.log (host, "host")

const name = host.name
console.log (name, "name")

const tags = item.tags
console.log (tags, "tags",typeof tags)

const picture = host.picture
console.log (picture, "picture")

const placename = item.title
console.log (picture, "picture")

const location = item.location
console.log (picture, "picture")

  return (
    <DivGlobal>
    <DivMain>
            <Carrousel picture={item.pictures} key={item.id} id={item.id} />

<DivTitle>
<DivName>
            <PlaceName>{placename}</PlaceName>
            <Location>{location}</Location>
            </DivName>
            <DivPic>
            <HostName>{name}</HostName>
            <HostPic src={picture}/>
            </DivPic>
            </DivTitle>    

            <DivRate>
              <DivTag>
            {tags.map((item, i) => (
            <Tag text={item} key={i}/>
            ))}
            </DivTag>
            <Rating rate={rating} key={rating.id} />
            </DivRate>

            <DivDrop>
            <Dropdown title='Description' text={description} key={description} />
            <Dropdown title='Equipements' style={{textAlign: 'right'}} text={equipments} key={equipments}/>
            </DivDrop>
        </DivMain>
        </DivGlobal>
  )
}
  

  
  export default FicheLogement