import Section from "../../components/Section_1"
import Thumb from "../../components/Thumb"
import styled from 'styled-components'
import  Background from '../../../src/assets/images/IMGSection.png'
import data from '../../logements.json'
import React from 'react';

console.log(data);

const DivProper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const DivDisplay = styled.div`
display: flex;
column-gap: 50px;
flex-wrap: wrap;
justify-content: center;
width: 1180px;
background: #F7F7F7;
border-radius: 25px;
padding-right: 20px;
padding-left: 20px;
padding-top: 50px;
padding-bottom: 0px;
margin-bottom:43px;

@media (max-width: 400px) {
  background: none;
  border-radius: 25px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 0px;
    margin-bottom: 43px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    width: 180px;
}
`

const freelanceProfiles = [
  {
TextSection: 'Chez vous, partout et ailleurs',
BackgroundSection: Background
},
]




function Home() {
  console.log(data,"data")
  console.log(freelanceProfiles,"freelanceProfiles")
    return (
      <DivProper>
        {freelanceProfiles.map((profile,i) => (
        <Section 
        picture={profile.BackgroundSection} 
        text={profile.TextSection}
        key={i}
        /> ))}

        <DivDisplay>

        {data.map((item, i) => (
          <Thumb cover={item.cover} title={item.title} key={i} id={item.id} />
        ))}

        </DivDisplay>
      </DivProper>

      
    )

  }

  
  
  export default Home