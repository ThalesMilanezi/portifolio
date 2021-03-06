import React from 'react'
import * as S from './style'

const AppBar = () => {
  return(
    <S.BarWrapper>
      <a href='#thales'><S.NameWrapper>Thales</S.NameWrapper></a>
      <S.MenuWrapper>
        <a href='#sobremim'><S.MenuItems>Quem Sou</S.MenuItems></a>
        <a href='#projetos'><S.MenuItems>Projetos</S.MenuItems></a>
        <a href='#contato'><S.MenuItems>Contato</S.MenuItems></a>
      </S.MenuWrapper>
    </S.BarWrapper>
  )
}

export default AppBar