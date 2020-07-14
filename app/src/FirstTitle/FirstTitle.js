import React from 'react'
import * as S from './style'


const FirstTitle = () => {
  const foto = <S.ImgWrapper src={require('../assets/fotothales.jpg')} alt='foto' />
  return (
    <S.BoxWrapper>
      {foto}
      <S.MiddleWrapper>
      <S.MainTitle>Eu sou Thales  Milanezi</S.MainTitle>
      <S.Paragraph>Desenvolvedor Web Full Stack</S.Paragraph>
      <S.Paragraph2>Apaixonado por tecnologia e programação</S.Paragraph2>
      </S.MiddleWrapper>
      <S.MidiasWrapper>
        <S.ImgLogoWrapper src={require('../assets/linkedin.png')} alt='linkedin' />
        <S.ImgLogoWrapper src={require('../assets/whats.png')} alt='whats' />
        <S.ImgLogoWrapper src={require('../assets/github.png')} alt='github' />
      </S.MidiasWrapper>
    </S.BoxWrapper>
  )
}

export default FirstTitle