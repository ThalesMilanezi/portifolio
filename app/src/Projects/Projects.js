import React from 'react'
import * as S from './style'

const Projects = () => {
  const fotoLabook = <S.ImageStyled src={require('../assets/LABOOK.gif')} alt='foto Labook' />
  const fotoCookenu = <S.ImageStyled src={require('../assets/Cookenu.gif')} alt='foto Cookenu' />
  const fotoIfuture = <S.ImageStyled src={require('../assets/IFuture2.gif')} alt='foto Ifuture' />
  return (
    <S.MainDiv>
      
      <S.MainTitle>Meus Projetos</S.MainTitle>

      <S.FirstChild>

        <S.Box>
          <S.ImageWrapper>{fotoLabook}</S.ImageWrapper>
          <S.WriteWrapper>
            <S.ProjectTitle>Labook</S.ProjectTitle>
            <S.Subtitle>Back-end</S.Subtitle>
            <S.ParagraphStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </S.ParagraphStyled>
            <a href='https://github.com/ThalesMilanezi/Labook-Backend'><S.Button>Ver no Github</S.Button></a>
          </S.WriteWrapper>
        </S.Box>

        <S.Box>
          <S.WriteWrapper>
            <S.ProjectTitle>Cookenu</S.ProjectTitle>
            <S.Subtitle>Back-end</S.Subtitle>
            <S.ParagraphStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </S.ParagraphStyled>
            <a href='https://github.com/ThalesMilanezi/Cookenu-Backend'><S.Button>Ver no Github</S.Button></a>
          </S.WriteWrapper>
          <S.ImageWrapper>{fotoCookenu}</S.ImageWrapper>
        </S.Box>

        <S.Box>
          <S.ImageWrapper>{fotoIfuture}</S.ImageWrapper>
          <S.WriteWrapper>
            <S.ProjectTitle>Ifuture</S.ProjectTitle>
            <S.Subtitle>Front-end</S.Subtitle>
            <S.ParagraphStyled>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </S.ParagraphStyled>
            <a href='https://github.com/ThalesMilanezi/Ifuture-frontend'><S.Button>Ver no Github</S.Button></a>
          </S.WriteWrapper>
        </S.Box>

      </S.FirstChild>

      <S.FirstChild>
        <a href="https://github.com/ThalesMilanezi"><S.ButtonP>Mais Projetos</S.ButtonP></a>
      </S.FirstChild>

    </S.MainDiv>
  )
}

export default Projects