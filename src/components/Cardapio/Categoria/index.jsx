import React from 'react'
import { useSelector } from 'react-redux'

import SubCategoria from '../SubCategoria'
import Item from '../Item'
import { settings } from '../util'
import { filterItens } from '../../../helpers'

import * as S from './styles'

const renderCategoria = (itens = []) =>
  itens.map((item, index) => <SubCategoria key={index} {...item} />)

const renderItens = (itens = []) => {
  let slidesToShow = 3
  if (itens.length < 3) {
    if (itens.length === 2) slidesToShow = 2
    else slidesToShow = 1
  }

  return (
    <S.SliderContainer>
      <S.Slider settings={{ ...settings, slidesToShow }}>
        {itens.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </S.Slider>

      <S.Divider />
    </S.SliderContainer>
  )
}

const Categoria = ({ nome, itens, seccoes }) => {
  const legendaSelected = useSelector((state) => state.legenda.selected)
  const newItens = filterItens(itens, legendaSelected)

  const render = !itens.length
    ? renderCategoria.bind(this, seccoes)
    : renderItens.bind(this, newItens)

  return (
    <S.Container>
      <S.Title>{nome}</S.Title>
      {render()}
    </S.Container>
  )
}

export default Categoria
