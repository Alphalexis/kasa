import styled from 'styled-components'

const TextTag = styled.h3`
position: static;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 142.6%;

color: #FFFFFF;

background: #FF6060;
border-radius: 10px;
padding: 0px 15px;

width: fit-content;
height: 25px;
`

function Tag() {

    return (
      <div>
        <TextTag>tag-name</TextTag>        
      </div>
    )
  }
  
  export default Tag