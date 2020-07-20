import React from 'react'
import * as S from './style'


const AboutMe = () => {
  const foto = <S.ImgWrapper src={require('../assets/negroPc.png')} alt='foto' />

  return (
    <S.MainWrapper>
      <S.BoxWrite>
        <S.TitleWrapper>Sobre Mim</S.TitleWrapper>
        <S.ParagraphStyled>
        Meu nome é Thales Fernando Milanezi, tenho 29 anos, natural de Limeira/SP mas atualmente morando em São Paulo Capital e estou iniciando minha carreira como programador.
         A paixão por tecnologia já é muito antiga mas transformar essa paixão em carreira  está sendo uma grande desafio em minha vida e como um bom desafio é algo que nos prove uma grande energia para seguir em frente, estou muito feliz com esse momento.
        Formado inicialmente como bacharelado em educação física pela Universidade Federal de São Paulo e especialista em cardiologia do exercício pelo Instituto Dante Pazzanese de Cardiologia tenho a área esportiva muito forte em mim mas preferi que essa segunda paixão fosse algo como hobbie para sempre do que ser a carreira principal.
         A vista disso, gosto muito de ensinar o que eu sei para outras pessoas então meu objetivo principal de carreira atualmente é aprender muito da área de desenvolvimento e me tornar uma referência técnica para outras pessoas para que eu possa ajudar a crescer muitos outros colegas dessa carreira.
        As tecnologias que estou me aprofundando no momento são:
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