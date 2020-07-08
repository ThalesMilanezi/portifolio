import React from 'react'
import * as S from './style'


const AboutMe = () => {
  return (
    <>
      <S.MainWrapper>
        <S.TitleWrapper>
          Sobre Mim
      </S.TitleWrapper>
        <S.ParagraphStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis dui ac lectus lacinia laoreet. Ut eu mi nec turpis hendrerit tristique. Quisque congue maximus metus eget vulputate. 
          Maecenas eget lorem sed libero aliquam efficitur vel mattis dui. Sed vel orci sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut interdum massa vel efficitur tempus.
          Aenean vulputate eleifend dignissim. Donec a risus in est tristique tincidunt. Quisque sit amet nulla sed arcu tristique fermentum. Mauris rhoncus libero sed felis condimentum, vel imperdiet nulla hendrerit. 
          Pellentesque leo ipsum, blandit eget mi sit amet, tincidunt scelerisque orci. Vestibulum nisi mauris, mattis non mauris id, aliquet placerat quam. Praesent vestibulum est ac metus convallis semper.
          Donec interdum sollicitudin sapien, ut consectetur nisi dapibus quis. Phasellus tincidunt lorem at sem lobortis, sit amet tristique turpis varius. Sed vel ultricies lectus. 
          Pellentesque facilisis, enim vitae consequat ornare, tortor ipsum iaculis libero, et lacinia purus leo in quam. 
          Nunc lacinia eros purus, dapibus porta sem imperdiet at. Suspendisse non urna odio.
      </S.ParagraphStyled>
      <S.ParagraphStyled>
        | Node Js | MySQL | HMTL | CSS | Javascript | Typescript
      </S.ParagraphStyled>
      <S.ButtoStyled> CV em PDF</S.ButtoStyled>
      </S.MainWrapper>
    </>
  )
}

export default AboutMe