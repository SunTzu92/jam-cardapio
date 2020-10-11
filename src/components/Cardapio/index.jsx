import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import Categoria from './Categoria'
import Item from './Item'
import * as S from './styles'
import { settings } from './util'
import { filterItens } from '../../helpers'

const selectorCardapio = createSelector(
  (state) => state,
  (state) => state.menu.selected,
  (state, selected) => state[selected]
)

const renderCategoria = (dataSource) =>
  dataSource.map((categoria, index) => <Categoria key={index} {...categoria} />)

const renderItens = ({  itens = [], nome  }) => {
  let slidesToShow = 3
  if (itens.length < 3) {
    if (itens.length === 2) slidesToShow = 2
    else slidesToShow = 1
  }

  return (
    <S.ContainerItem>
      <S.TitleItem>{nome}</S.TitleItem>
      <S.SliderContainer>
        <S.Slider settings={{ ...settings, slidesToShow }}>
          {itens.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </S.Slider>

        <S.Divider />
      </S.SliderContainer>
    </S.ContainerItem>
  )
}

function Cardapio() {
  const menuLegendas = useSelector((state) => state.legenda)
  const { itens: card, selected } = useSelector(selectorCardapio)

  const { subcategorias = [], itens = [], nome = '' } = card[selected] || {}
  const newItens = filterItens(itens, menuLegendas)

  const render = !itens.length
    ? renderCategoria.bind(this, subcategorias)
    : renderItens.bind(this, { newItens, nome })

  return (
    <S.Container>
      <S.Content>{render()}</S.Content>
    </S.Container>
  )
}

export default Cardapio
