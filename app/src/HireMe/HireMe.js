import React from 'react'
import * as S from './style'


const HireMe = () => {
  return (
    <S.MainWrapper id='contato'>

      <S.TitleWrapper>
        <S.Title>Contrate-me!</S.Title>
      </S.TitleWrapper>

      <S.TextWrapper>
        <S.Paragraph>
          Procuro oportunidade de trabalho onde eu possa aprender,
          me desenvolver e evoluir na minha carreia profissional.
        </S.Paragraph>
        <S.Paragraph>
          E-mail para contato: <a id='link' href='mailto:milanezitf@gmail.com'>milanezitf@gmail.com.br</a>
        </S.Paragraph>
        <S.Paragraph>
          <a href='tel://11999393387'>Celular: (11) 9 9939-3387</a>
        </S.Paragraph>
      </S.TextWrapper>

      <S.SocialWrapper>
        <a href='https://www.linkedin.com/in/thales-fernando-milanezi-952028114/'><S.Medias  src={require('../assets/linkedin.png')} alt='linkedin' /></a>
        <a href='https://wa.me/5511999393387'><S.Medias  src={require('../assets/whats.png')} alt='whats' /></a>
        <a href='https://github.com/ThalesMilanezi/'><S.Medias src={require('../assets/github.png')} alt='github' /></a>
      </S.SocialWrapper>

    </S.MainWrapper>
  )
}

export default HireMe