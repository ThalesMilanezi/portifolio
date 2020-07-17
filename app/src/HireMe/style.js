import styled from 'styled-components'

export const MainWrapper = styled.div`
display: grid;
gap: 42px;
justify-content: center;
align-items: center;
background-color:#8d1c31;
padding:12px;
`

export const TitleWrapper = styled.div`

`
export const Title = styled.h1`
font-family: Montserrat;
font-size: 42px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.25px;
text-align: center;
color: #ffffff;
`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Paragraph = styled.p`
font-family: Montserrat;
font-size: 20px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.24px;
text-align: center;
color: #ffffff;
`

export const SocialWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content:space-between;
margin-left:20%;
margin-bottom:3%;
`


export const Medias = styled.img`
width: 40px;
height: 38px;
object-fit: contain;
`