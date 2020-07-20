import styled from 'styled-components'

export const MainDiv = styled.div`
background-color: #ffffff;
display:flex;
flex-direction: column;

`

export const MainTitle = styled.h1`
display: flex;
justify-content: center;
align-items: center;
font-family: Montserrat;
font-size: 25px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.15px;
text-align: center;
color: #45525b;
`

export const FirstChild = styled.div`
display:grid;
align-items: center;
justify-content: space-around;
gap:28px;
margin: 12px;
padding:12px;
`

export const Box = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 72px;
justify-content: space-around;
padding:10px;
`

export const ImageWrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;

`

export const ImageStyled = styled.img`
width: 312px;
height: 50vh;
object-fit: contain;
`

export const ProjectTitle = styled.h1`
width: 172px;
height: 32px;
font-family: Montserrat;
font-size: 62px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.25px;
color: #063447;
`

export const Subtitle = styled.h4`
font-family: Montserrat;
font-size: 24px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.28px;
color: #063447;
`

export const ParagraphStyled = styled.p`
font-family: Montserrat;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.16px;
color: #063447;
`

export const Button = styled.button`
width: 140px;
height: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
background-color: #4eaccf;
color: white;
`

export const ButtonP = styled.button`
width: 150px;
height: 30px;
border-radius: 8px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
background-color: #8d1c31;
color:white;
`

export const WriteWrapper = styled.div`
display: flex;
flex-direction:column;

`
