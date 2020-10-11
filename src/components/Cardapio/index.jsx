import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import Categoria from './Categoria'
import Item from './Item'
import * as S from './styles'
import { settings } from './util'

const selectorCardapio = createSelector(
  (state) => state,
  (state) => state.menu.selected,
  (state, selected) => state[selected]
)

const renderCategoria = (dataSource) =>
  dataSource.map((categoria, index) => <Categoria key={index} {...categoria} />)

const renderItens = ({  itens = [], nome  }) => {
  const slidesToShow = itens.length > 2 ? 3 : 2
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
  const { itens: card, selected } = useSelector(selectorCardapio)
  const { subcategorias = [], itens = [], nome = '' } = card[selected] || {}

  const render = !itens.length
    ? renderCategoria.bind(this, subcategorias)
    : renderItens.bind(this, { itens, nome })

  return (
    <S.Container>
      <S.Content>{render()}</S.Content>
    </S.Container>
  )
}

export default Cardapio
