import React from 'react'
import * as S from './style'


const HireMe = () => {
  return (
    <S.MainWrapper>

      <S.TitleWrapper>
        <S.Title>Contrate-me!</S.Title>
      </S.TitleWrapper>

      <S.TextWrapper>
        <S.Paragraph>
          Procuro oportunidade de trabalho onde eu possa aprender,
          me desenvolver e evoluir na minha carreia profissional.
        </S.Paragraph>
        <S.Paragraph>
          E-mail para contato: milanezitf@gmail.com.br
        </S.Paragraph>
        <S.Paragraph>
          Celular: (11) 9 9939-3387
        </S.Paragraph>
      </S.TextWrapper>

      <S.SocialWrapper>
        <a href='https://github.com/ThalesMilanezi/'><S.Medias  src={require('../assets/linkedin.png')} alt='linkedin' /></a>
        <a href='tel://11999393387'><S.Medias  src={require('../assets/whats.png')} alt='whats' /></a>
        <a href='https://www.linkedin.com/in/thales-fernando-milanezi-952028114/'><S.Medias src={require('../assets/github.png')} alt='github' /></a>
      </S.SocialWrapper>

    </S.MainWrapper>
  )
}

export default HireMe