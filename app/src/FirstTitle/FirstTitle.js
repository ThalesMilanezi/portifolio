import React from 'react'
import * as S from './style'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography } from '@material-ui/core'


const FirstTitle = () => {
  const foto = <S.ImgWrapper src={require('../assets/fotothales.jpg')} alt='foto' />
  return (
    <S.BoxWrapper>
      <S.MidiasWrapper>
        <S.ImgLogoWrapper src={require('../assets/linkedin.png')} alt='linkedin' />
        <S.ImgLogoWrapper src={require('../assets/whats.png')} alt='whats' />
        <S.ImgLogoWrapper src={require('../assets/github.png')} alt='github' />
      </S.MidiasWrapper>
      <div>
      <S.MainTitle>
        Eu sou Thales Fernando Milanezi
      </S.MainTitle>
      <Typography>Desenvolvedor Web Full Stack</Typography>
      <Typography>Apaixonado por tecnologia e programação</Typography>
      </div>
      {foto}
    </S.BoxWrapper>
  )
}

export default FirstTitle

{/* <S.MenuWrapper>
        <MenuItem>Thales</MenuItem>
        <MenuItem>Quem sou </MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Contato</MenuItem>
      </S.MenuWrapper> */}