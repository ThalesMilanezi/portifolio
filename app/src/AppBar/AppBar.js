import React from 'react'
import * as S from './style'

const AppBar = () => {
  return(
    <S.BarWrapper>
      <S.NameWrapper>
        Thales
      </S.NameWrapper>
      <S.MenuWrapper>
        <a href=''><S.MenuItems>Quem Sou</S.MenuItems></a>
        <a href=''><S.MenuItems>Projetos</S.MenuItems></a>
        <a href=''><S.MenuItems>Contato</S.MenuItems></a>
      </S.MenuWrapper>
    </S.BarWrapper>
  )
}

export default AppBar