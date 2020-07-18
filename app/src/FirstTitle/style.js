import styled from 'styled-components'
import  Menu  from '@material-ui/core/Menu'

export const BoxWrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr 100px ;
align-items: center;
justify-content:space-around;
background-color: #8d1c31;
box-sizing: border-box;
margin:0;
`

export const MainTitle = styled.div`
font-family: Montserrat;
font-size: 50px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #d97824;
`

export const Paragraph = styled.div`
  height: 29px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #ffffff;
  margin:16px;

`
export const Paragraph2 = styled.p`
  height: 19px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
  margin:16px;

`

export const ImgWrapper = styled.img`
width: 498px;
height: 520px;
`
export const ImgLogoWrapper = styled.img`
height: 36px;
object-fit: contain;

`

export const MidiasWrapper = styled.div`
display: grid;
gap:32px;
margin-left:32px;
`

export const MenuWrapper = styled(Menu)`
display:flex;
flex-direction: row;
`

export const MiddleWrapper = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
`