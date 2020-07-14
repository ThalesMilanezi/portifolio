import React from 'react'
import * as S from './style'


const AboutMe = () => {
  const foto = <S.ImgWrapper src={require('../assets/negroPc.png')} alt='foto' />

  return (
    <S.MainWrapper>
      <S.BoxWrite>
        <S.TitleWrapper>Sobre Mim</S.TitleWrapper>
        <S.ParagraphStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis dui ac lectus lacinia laoreet. Ut eu mi nec turpis hendrerit tristique. Quisque congue maximus metus eget vulputate.
          Maecenas eget lorem sed libero aliquam efficitur vel mattis dui. Sed vel orci sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut interdum massa vel efficitur tempus.
          Aenean vulputate eleifend dignissim. Donec a risus in est tristique tincidunt. Quisque sit amet nulla sed arcu tristique fermentum. Mauris rhoncus libero sed felis condimentum, vel imperdiet nulla hendrerit.
      </S.ParagraphStyled>
        <S.ParagraphStyled2>
          | Node.Js | MySQL | HMTL | CSS | JAVASCRIPT | TYPESCRIPT
      </S.ParagraphStyled2>
        <S.ButtoStyled> CV em PDF</S.ButtoStyled>
      </S.BoxWrite>
      <S.BoxImg>
        {foto}
      </S.BoxImg>
    </S.MainWrapper>
  )
}

export default AboutMe