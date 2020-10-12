import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { createSelector } from 'reselect'
import _map from 'lodash/map'

import { TYPES } from '../../reducers/legendaReducer'
import LegendaItem from './Item'
import * as S from './styles'

const selectorLegenda = createSelector(
  (state) => state.legenda,
  (legendas) => legendas
)

const Legenda = () => {
  const legendas = useSelector(selectorLegenda, shallowEqual)
  const dispatch = useDispatch()
  const dataSource = _map(legendas)

  const handleClick = useCallback(
    (target) => {
      dispatch({
        type: TYPES.CHANGE_LEGENDA,
        payload: { target, active: !legendas[target].active }
      })
    },
    [legendas, dispatch]
  )

  return (
    <S.Container>
      {dataSource.map((item, index) => (
        <LegendaItem key={index} {...item} onClick={handleClick} />
      ))}
    </S.Container>
  )
}

export default Legenda
