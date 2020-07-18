import React from 'react'
import * as S from './style'


const FirstTitle = () => {
  const foto = <S.ImgWrapper src={require('../assets/fotothales.jpg')} alt='foto' />
  return (
    <S.BoxWrapper>
      {foto}
      <S.MiddleWrapper>
        <S.MainTitle>Olá! Eu sou </S.MainTitle>
        <S.MainTitle>Thales  Milanezi </S.MainTitle>
        <S.Paragraph>Desenvolvedor Web Full Stack</S.Paragraph>
        <S.Paragraph2>Apaixonado por tecnologia e programação</S.Paragraph2>
      </S.MiddleWrapper>
      <S.MidiasWrapper>
        <a href='https://www.linkedin.com/in/thales-fernando-milanezi-952028114/'><S.ImgLogoWrapper src={require('../assets/linkedin.png')} alt='linkedin' /></a>
        <a href='https://wa.me/5511999393387'><S.ImgLogoWrapper src={require('../assets/whats.png')} alt='whats' /></a>
        <a href='https://github.com/ThalesMilanezi/'><S.ImgLogoWrapper src={require('../assets/github.png')} alt='github' /></a>
      </S.MidiasWrapper>
    </S.BoxWrapper>
  )
}

export default FirstTitle