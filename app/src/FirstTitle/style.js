import styled from 'styled-components'
import  Menu  from '@material-ui/core/Menu'

export const BoxWrapper = styled.div`
display:grid;
grid-template-columns:30px 1fr 1fr;
align-items: center;
justify-items: center;
justify-content:space-around;
background-color: rgba(6, 52, 71, 0.45);
box-sizing: border-box;
`

export const MainTitle = styled.div`
width: 317px;
height: 122px;
font-family: Montserrat;
font-size: 50px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.29px;
color: #ffffff;
`

export const ImgWrapper = styled.img`
max-width: 20vw;
`
export const ImgLogoWrapper = styled.img`
width: 30px;
height: 27px;
object-fit: contain;
`

export const MidiasWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const MenuWrapper = styled(Menu)`
display:flex;
flex-direction: row;
`