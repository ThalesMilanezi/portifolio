import React from 'react'
import * as S from './style'

const Education = () => {
  return (
    <S.DivWrapper>
      <div>
        <S.MainTitle>
          Educação
      </S.MainTitle>
      </div>
      <S.EducationWrapper>
        <S.Box>
          <S.TitleBox>
            Curso de Web Full Stack na Labenu
        </S.TitleBox>
          <S.SubTitle>
            6 meses - 2020
        </S.SubTitle>
          <S.Paragraph>
            A Labenu é uma startup que forma Desenvolvedores Web Full Stack prontos para o mercado de trabalho.
            São mais de 1000 horas de programação que faz com que seus alunos sejam profissionais completos tanto no BackEnd quanto no Front End.
            Competências:
            React, javascript, node.js, aws, mySQL, typescript, metodologia ágil, git, entre outros.
        </S.Paragraph>
        </S.Box>
        <S.Box>
          <S.TitleBox>
            Profissional de Educação Física Bacharelado formado pela UNIFESP
        </S.TitleBox>
          <S.SubTitle>
            2010 - 2014
        </S.SubTitle>
          <S.Paragraph>
          Profissional de educação física bacharelado com formação voltada para a 
          área da saúde. Participação na Empresa Júnior como Assessor de Projetos. 
          Bolsista no Programa de extensão da UNIFESP do Quiosque da Saúde em parceria com a Prefeitura de Santos.
        </S.Paragraph>
        </S.Box>
        <S.Box>
          <S.TitleBox>
            Aprimoramento Profissional no Instituto Dante Pazzanese de Cardiologia </S.TitleBox>
          <S.SubTitle>
            2015-2016
        </S.SubTitle>
          <S.Paragraph>
            O programa de Aprimoramento Profissional em Educação Física em Cardiologia tem como
            objetivo orientar e capacitar profissionais de educação física para o desempenho da
            reabilitação cardiovascular, oferecendo conhecimento científico na área de doenças
            crônicas não transmissíveis, bem como medidas de prevenção, controle e tratamento
            estimulando uma visão crítica do sistema de saúde e assim oferecendo ao mercado de trabalho,
            profissionais capazes de dinamizar as ações básicas de saúde.
        </S.Paragraph>
        </S.Box>
      </S.EducationWrapper>
    </S.DivWrapper>
  )
}


export default Education