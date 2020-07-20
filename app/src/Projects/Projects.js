import React from 'react'
import * as S from './style'

const Projects = () => {
  const fotoLabook = <S.ImageStyled src={require('../assets/LABOOK.gif')} alt='foto Labook' />
  const fotoCookenu = <S.ImageStyled src={require('../assets/Cookenu.gif')} alt='foto Cookenu' />
  const fotoIfuture = <S.ImageStyled src={require('../assets/IFuture2.gif')} alt='foto Ifuture' />
  return (
    <S.MainDiv id='projetos'>
      
      <S.MainTitle>Meus Projetos</S.MainTitle>

      <S.FirstChild>

        <S.Box>
          <S.ImageWrapper>{fotoLabook}</S.ImageWrapper>
          <S.WriteWrapper>
            <S.ProjectTitle>Labook</S.ProjectTitle>
            <S.Subtitle>Back-end</S.Subtitle>
            <S.ParagraphStyled>
            Esse projeto foi desenvolvido para ser uma aplicação parecida com o Facebook, 
            ele é uma rede social com o objetivo de promover a conexão e interação entre 
            seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), 
            comentá-los e curti-los também, nessa aplicação você pode: - Cadastrar usuários - logar - 
            fazer amizade como também desfazer -  ver todo seu feed.
            </S.ParagraphStyled>
            <a href='https://github.com/ThalesMilanezi/Labook-Backend'><S.Button>Ver no Github</S.Button></a>
          </S.WriteWrapper>
        </S.Box>

        <S.Box>
          <S.ImageWrapper>{fotoCookenu}</S.ImageWrapper>
          <S.WriteWrapper>
            <S.ProjectTitle>Cookenu</S.ProjectTitle>
            <S.Subtitle>Back-end</S.Subtitle>
            <S.ParagraphStyled>
            Esse produto também é rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. 
            Ela possui todas as funcionalidades mais comuns em redes sociais:
	          - cadatros/login de usuários
	          - Criar uma receita
	          - Ver uma receita
	          - Deletar uma receita
	          - Seguir/Deixar de seguir um usuário
            - Ver o feed com todas as receitas ou selecionar alguma especifica
            </S.ParagraphStyled>
            <a href='https://github.com/ThalesMilanezi/Cookenu-Backend'><S.Button>Ver no Github</S.Button></a>
          </S.WriteWrapper>
        </S.Box>

        <S.Box>
          <S.ImageWrapper>{fotoIfuture}</S.ImageWrapper>
          <S.WriteWrapper>
            <S.ProjectTitle>IFuture</S.ProjectTitle>
            <S.Subtitle>Front-end</S.Subtitle>
            <S.ParagraphStyled>
            Projeto frontend baseado nos famosos aplicativos de delivery de comida.
            Aplicação desenvolvida com o framework React e diversas outras tecnologias, nesse 
            projeto é possível: cadastrar e logar usuários - ver perfil do usuário - ver um 
            restaurante específico e seus detalhes - fazer um pedido - ver seu histórico de pedidos, entre outros.
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