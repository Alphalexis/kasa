import styled from 'styled-components'
import data from '../../logements.json'
import Rating from "../../components/Rating"
import Carrousel from '../../components/Carrousel'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom'

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

@media (max-width: 400px) {
  font-size: 12px;
  width: 50px;
  line-height: 17.11px;
}
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

@media (max-width: 400px) {
font-size: 18px;
font-weight: 500;
line-height: 26px;
}

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

@media (max-width: 400px) {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
`

const HostPic = styled.img`
width: 64px;
height: 64px;
border-radius: 50%;

@media (max-width: 400px) {
  width: 32px;
  height: 32px;
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
@media (max-width: 400px) {
  height: 795px;
  width: 335px;
  border-radius: 10px;
  margin-bottom: 0px;
}
`

const DivTitle = styled.div`
display: flex;
justify-content: space-between;
    margin-top: 25px;
    width: 100%;
    @media (max-width: 400px) {
      flex-direction: column;
    }
`

const DivName = styled.div`
display: flex;
flex-direction: column;
column-gap: 15px;

`
const DivPic = styled.div`
display: flex;
column-gap: 15px;
@media (max-width: 400px) {
column-gap: 10px;
  }
`
const DivRate = styled.div`
display: flex;
justify-content: space-start;
flex-direction: column;
width: 20%;
margin-top: 15px;
row-gap: 44px;
align-items: flex-end;

@media (max-width: 400px) {
flex-direction: row-reverse;
row-gap: 0px;
column-gap: 92px;
width: 100%;
}
`
const DivTag = styled.div`
display: flex;
column-gap: 15px;
@media (max-width: 400px) {
width: 350px;
flex-wrap: wrap;
}
`

const DivDrop = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
column-gap: 13%;
@media (max-width: 400px) {
  flex-direction: column;
}
`

function FicheLogement() {

  let { id } = useParams();

  console.log(id, "id");

  const item = data.find(element => element.id === id);

  return (
    <section className="content">
      {item ?
        <>
          <DivGlobal>
            <DivMain>
              <Carrousel picture={item.pictures} key={item.id} id={item.id} />

              <DivTitle>
                <DivName>
                  <PlaceName>{item.title}</PlaceName>
                  <Location>{item.location}</Location>
                  <DivTag>
                    {item.tags.map((item, i) => (
                      <Tag text={item} key={i} />
                    ))}
                  </DivTag>
                </DivName>
                <DivRate>
                  <DivPic>
                    <HostName>{item.host.name}</HostName>
                    <HostPic src={item.host.picture} />
                  </DivPic>

                  <Rating rate={item.rating} key={item.rating.id} />
                </DivRate>
              </DivTitle>



              <DivDrop>
                <Dropdown title='Description' text={item.description} key={item.description} />
                <Dropdown title='Equipements' style={{ textAlign: 'right' }} text={item.equipments} key={item.equipments} />
              </DivDrop>
            </DivMain>
          </DivGlobal>
        </>
        : <Navigate to="/*" />}
    </section>
  );
                    }

  
  export default FicheLogement