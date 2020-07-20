import styled from 'styled-components'

export const MainWrapper = styled.div`
display: grid;
grid-template-rows: 10vh 45vh ;
background-color: #33a6a6;
`

export const Title = styled.h1`
font-family: Montserrat;
font-size:55px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.32px;
color: #ffffff;
`

export const TitleWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items: center;
font-family: Montserrat;
font-size: 32px;
font-weight: bolder;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.15px;
text-align: center;
color: #ffffff;
`

export const StackWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const Paragraph = styled.p`
font-family: Montserrat;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.22px;
color: #ffffff;
`

export const EndWrapper = styled.div`
display: flex;
width: 20vw;
flex-direction: column;
justify-content:center;
align-items: center;
margin: 0 auto;
`
