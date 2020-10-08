import React from 'react'

import * as S from './styles'

function Menu() {
  return (
    <S.Container>
      <S.Button type="button" active={true}>
        Entradas
      </S.Button>
      <S.Divider />
      <S.Button type="button">Pratos Principais</S.Button>
      <S.Divider />
      <S.Button type="button">Sushi {'&'} Roll</S.Button>
      <S.Divider />
      <S.Button type="button">Sobremesas</S.Button>
    </S.Container>
  )
}

export default Menu
