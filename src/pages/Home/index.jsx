import Section from "../../components/Section_1"
import Thumb from "../../components/Thumb"
import styled from 'styled-components'
import  Background from '../../../src/assets/images/IMGSection.png'
import data from '../../logements.json'
import React from 'react';

console.log(data);

const DivDisplay = styled.div`
display: flex;
column-gap: 50px;
flex-wrap: wrap;
width: 1180px;
background: #F7F7F7;
border-radius: 25px;
padding-right: 0px;
padding-left: 50px;
padding-top: 50px;
padding-bottom: 0px;
margin-left:100px;
margin-bottom:43px;
`
const freelanceProfiles = [
  {
TextSection: 'Chez vous, partout et ailleurs',
BackgroundSection: Background
},
]

let Home = React.createClass({
  createThumb: function (cover, title) {
    return <Thumb source={cover} title={title} />;
  },

  createThumbs: function (covers, titles) {
    return (
      covers.map(this.createThumb) ||
      titles.map(this.createThumb)
      );
  },



render: function Home() {
  
    return (
      <div>
        {freelanceProfiles.map((profile) => (
        <Section 
        picture={profile.BackgroundSection} 
        text={profile.TextSection}/> ))}
        <DivDisplay>

        {this.createThumb(data.covers, data.titles)}
          <Thumb>

          </Thumb>
          <Thumb>

</Thumb>
<Thumb>

</Thumb>
<Thumb>

</Thumb>
<Thumb>

</Thumb>
<Thumb>

</Thumb>
        </DivDisplay>
      </div>

      
    )
  }
});
  
  
  export default Home