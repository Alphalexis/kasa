import Dropdownlarge from "../../components/Dropdownlarge"
import Section from "../../components/Section_1"
import styled from 'styled-components'
import  Background from '../../../src/assets/images/kalem.png'

const DivDisplay = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-bottom: 40px;
`
const freelanceProfiles = [
  {
BackgroundSection: Background
},
]

function APropos() {
    return (
      <div>
        <DivDisplay>
        {freelanceProfiles.map((profile) => (
        <Section 
        picture={profile.BackgroundSection} 
        /> ))}
        <Dropdownlarge id="reveal"></Dropdownlarge>
        <Dropdownlarge></Dropdownlarge>
        <Dropdownlarge></Dropdownlarge>
        <Dropdownlarge></Dropdownlarge>
        </DivDisplay>
      </div>
    )
  }
  
  export default APropos