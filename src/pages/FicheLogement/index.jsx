import data from '../../logements.json'
import Rating from "../../components/Rating"
import Carrousel from '../../components/Carrousel'
import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
import './FicheLogement.css'
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom'

console.log(data, 'data dans logement')


function FicheLogement() {

  let { id } = useParams();

  console.log(id, "id");

  const item = data.find(element => element.id === id);

  return (
    <section className="content">
      {item ?
        <>
          <div className='DivGlobal'>
            <div className='DivMain'>
              <Carrousel picture={item.pictures} key={item.id} id={item.id} />

              <div className='DivTitleLog'>
                <div className='DivName'>
                  <h2 className='PlaceName'>{item.title}</h2>
                  <h3 className='Location'>{item.location}</h3>
                  <div className='DivTag'>
                    {item.tags.map((item, i) => (
                      <Tag text={item} key={i} />
                    ))}
                  </div>
                </div>
                <div className='DivRate'>
                  <div className='DivPic'>
                    <h3 className='HostName'>{item.host.name}</h3>
                    <img className='HostPic' src={item.host.picture} alt='HostPic'/>
                  </div>

                  <Rating rate={item.rating} key={item.rating.id} />
                </div>
              </div>



              <div className='DivDropLog'>
                <Dropdown title='Description' text={item.description} key={item.description} />
                <Dropdown title='Equipements' style={{ textAlign: 'right' }} text={item.equipments} key={item.equipments} />
              </div>
            </div>
          </div>
        </>
        : <Navigate to="/*" />}
    </section>
  );
                    }

  
  export default FicheLogement