import React from 'react'
import * as S from './style'

const WhatIDo = () => {
  return (
    <S.MainWrapper>

      <S.TitleWrapper>Meus Conhecimentos</S.TitleWrapper>

      <S.StackWrapper>
        
        <S.EndWrapper>
          <S.Title>Front-end</S.Title>
          <S.Paragraph>
            Desenvolvimento de aplicações
            web utilizando HTML, CSS e
            JavaScript.

            Criação de sites responsivos
            seguindo princípio de
            Mobile First.
          </S.Paragraph>
        </S.EndWrapper>

        <S.EndWrapper>
          <S.Title >Back-end</S.Title>
          <S.Paragraph>
            Aplicações utilizando NodeJS,
            Typescript e MySQL.
            Criação de API´s para
            comunicação com front-end
            seguindo princípio de Clean Code.
          </S.Paragraph>
        </S.EndWrapper>

      </S.StackWrapper>

    </S.MainWrapper>
  )
}

export default WhatIDo