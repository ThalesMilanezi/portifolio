import React from 'react'
import * as S from './style'

const WhatIDo = () => {
  return (
    <S.MainWrapper>
      <S.TitleWrapper>Meus Conhecimentos</S.TitleWrapper>
      <S.StackWrapper>
        <S.FrontWrapper>
          <S.Title>Front-end</S.Title>
          <S.Paragraph>
            Desenvolvimento de aplicações
            web utilizando HTML, CSS e
            JavaScript.

            Criação de sites responsivos
            seguindo princípio de
            Mobile First.
        </S.Paragraph>
        </S.FrontWrapper>
        <S.BackWrapper>
          <S.Title >Back-end</S.Title>
          <S.Paragraph2>
            Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API´s para
            comunicação com front-end
            seguindo princípio de Clean Code.
        </S.Paragraph2>
        </S.BackWrapper>
      </S.StackWrapper>
    </S.MainWrapper>
  )
}

export default WhatIDo