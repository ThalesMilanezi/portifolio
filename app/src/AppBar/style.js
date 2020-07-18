import styled from 'styled-components'

export const BarWrapper = styled.div`
display: flex;
justify-content:space-between;
border-right:0.5pt  solid black;
border-top:0.5pt  solid black;
`

export const NameWrapper = styled.p`
width: 75px;
height: 25px;
font-family: Montserrat;
font-size: 24px;
font-weight: bolder;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.28px;
color: #8d1c31;
`

export const MenuWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap:8px;
a {
  text-decoration: none;
} 
`

export const MenuItems = styled.p`
height: 19px;
font-family: Montserrat;
font-size: 24px;
font-weight: bolder;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.22px;
text-align: center;
color: #8d1c31;

`