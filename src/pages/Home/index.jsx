import Section from "../../components/Section_1"
import Thumb from "../../components/Thumb"
import  Background from '../../../src/assets/images/IMGSection.png'
import data from '../../logements.json'
import React from 'react'
import './Home.css'

console.log(data);


const freelanceProfiles = [
  {
TextSection: 'Chez vous, partout et ailleurs',
BackgroundSection: Background
},
]


function Home() {

    return (
      <div className="DivProper">
        {freelanceProfiles.map((profile,i) => (
        <Section 
        picture={profile.BackgroundSection} 
        text={profile.TextSection}
        key={i}
        /> ))}

        <div className="DivDisplayHome">

        {data.map((item, i) => (
          <Thumb cover={item.cover} title={item.title} key={i} id={item.id} />
        ))}

        </div>
      </div> 
    )
  }

  
  
  export default Home