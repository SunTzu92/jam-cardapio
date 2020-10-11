import React from 'react'
// import { useSelector } from 'react-redux'

import SubCategoria from '../SubCategoria'

import Item from '../Item'
import { settings } from '../util'
import * as S from './styles'

const renderCategoria = (itens = []) =>
  itens.map((item, index) => <SubCategoria key={index} {...item} />)

const renderItens = (itens = []) => {
  const slidesToShow = itens.length > 2 ? 3 : 2
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
  // const legendas = useSelector((state) => state.legenda)
  const render = !itens.length ? renderCategoria.bind(this, seccoes) : renderItens.bind(this, itens)
  return (
    <S.Container>
      <S.Title>{nome}</S.Title>
      {render()}
    </S.Container>
  )
}

export default Categoria
