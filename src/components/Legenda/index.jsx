import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { createSelector } from 'reselect'
import _map from 'lodash/map'

import LegendaItem from './Item'
import * as S from './styles'

const selectorLegenda = createSelector(
  (state) => state.legenda,
  (legendas) => legendas
)

const Legenda = () => {
  const legendas = useSelector(selectorLegenda, shallowEqual)
  const menuSelected = useSelector((state) => state.menu.selected)
  const dataSource = _map(legendas)

  if (menuSelected === 'bebidas') return ''

  return (
    <S.Container>
      {dataSource.map((item, index) => (
        <LegendaItem key={index} {...item} />
      ))}
    </S.Container>
  )
}

export default Legenda
