import React from 'react'
import * as S from './style'

const Projects = () => {
  return (
    <S.MainDiv>
      <S.MainTitle>Meus Projetos</S.MainTitle>
      <S.FirstChild>
        <S.Box>
          <S.ImageWrapper>
            <S.ImageStyled />
          </S.ImageWrapper>
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
          <a hrf=''><S.Button>Ver no Github</S.Button></a>
        </S.Box>

        <S.Box>
          <S.ImageWrapper>
            <S.ImageStyled />
          </S.ImageWrapper>
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
          <a hrf=''><S.Button>Ver no Github</S.Button></a>
        </S.Box>
        <S.Box>
          <S.ImageWrapper>
            <S.ImageStyled />
          </S.ImageWrapper>
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
          <a hrf=''><S.Button>Ver no Github</S.Button></a>
        </S.Box>
      </S.FirstChild>
      <S.FirstChild>
        <S.ButtonP>Mais Projetos</S.ButtonP>
      </S.FirstChild>
    </S.MainDiv>
  )
}

export default Projects