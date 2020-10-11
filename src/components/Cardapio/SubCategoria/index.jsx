import React from 'react'
// import { useSelector } from 'react-redux'

import Item from '../Item'
import { settings } from '../util'
import * as S from './styles'

// import { filterItens } from '../../../helpers'

const SubCategoria = ({ nome, itens }) => {
  // const menuLegendas = useSelector((state) => state.legenda)
  // const newItens = filterItens(itens, menuLegendas)

  let slidesToShow = 3
  if (itens.length < 3) {
    if (itens.length === 2) slidesToShow = 2
    else slidesToShow = 1
  }

  return (
    <S.Container>
      <S.Title> {nome} </S.Title>

      <S.SliderContainer>
        <S.Slider settings={{ ...settings, slidesToShow }}>
          {itens.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </S.Slider>
        <S.Divider />
      </S.SliderContainer>
    </S.Container>
  )
}

export default SubCategoria
