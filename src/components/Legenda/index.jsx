import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import _map from 'lodash/map'

import { TYPES } from '../../reducers/legendaReducer'
import LegendaItem from './Item'
import * as S from './styles'

const Legenda = () => {
  const { itens, selected } = useSelector((state) => state.legenda, shallowEqual)
  const menuSelected = useSelector((state) => state.menu.selected)

  const dispatch = useDispatch()
  const dataSource = _map(itens)

  const handleClick = useCallback(
    (target) => {
      const idx = selected.indexOf(target)
      let result = [...selected]

      if (idx !== -1) result.splice(idx, 1)
      else result.push(target)

      dispatch({
        type: TYPES.CHANGE_LEGENDA,
        payload: { selected: result }
      })
    },
    [dispatch, selected]
  )

  useEffect(() => {
    dispatch({
      type: TYPES.CHANGE_LEGENDA,
      payload: { selected: [] }
    })
  }, [dispatch, menuSelected])

  if (menuSelected === 'bebidas') return ''

  return (
    <S.Container>
      {dataSource.map((item, index) => (
        <LegendaItem key={index} {...item} selected={selected} onClick={handleClick} />
      ))}
    </S.Container>
  )
}

export default Legenda
