import React from 'react'
import * as S from './style'


const HireMe = () => {
  return (
    <S.mainWrapper>
      <S.TitleWrapper>
        <S.Title>
          Contrate-me!
        </S.Title>
      </S.TitleWrapper>
      <S.TextWrapper>
        <S.Paragraph>
          Procuro oportunidade de trabalho onde eu possa aprender,
          me desenvolver e evoluir na minha carreia profissional.

          E-mail para contato: milanezitf@gmail.com.br
          Celular: (11) 9 9939-3387
        </S.Paragraph>
      </S.TextWrapper>
      <S.SocialWrapper>
        <S.Medias src={require('../assets/linkedin.png')} alt='linkedin' />
        <S.Medias src={require('../assets/whats.png')} alt='whats' />
        <S.Medias src={require('../assets/github.png')} alt='github' />
      </S.SocialWrapper>
    </S.mainWrapper>
  )
}

export default HireMe