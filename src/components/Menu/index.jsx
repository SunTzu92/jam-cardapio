import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { Sticky } from 'react-sticky'
import _map from 'lodash/map'

import { TYPES as TYPES_BEBIDA } from '../../reducers/bebidaReducer'
import { TYPES as TYPES_COMIDA } from '../../reducers/comidaReducer'
import MenuItem from './Item'

import * as S from './styles'

const TYPE_CONTEXT = {
  bebidas: TYPES_BEBIDA,
  comidas: TYPES_COMIDA
}

const selectorMenu = createSelector(
  (state) => state,
  (state) => state.menu.selected,
  (state, selected) => ({ selected, menu: state[selected] })
)

const Item = ({ showDivider, ...rest }) => (
  <>
    <MenuItem {...rest} />
    {showDivider && <S.Divider />}
  </>
)

function Menu() {
  const state = useSelector(selectorMenu)
  const menuRef = useRef(null)
  const [offset, setOffSet] = useState(0)

  const dispatch = useDispatch()

  const listMenu = _map(state.menu.itens)
  const total = listMenu.length - 1
  const selectedMenu = state.selected

  const handleClick = useCallback(
    (selected) => {
      dispatch({ type: TYPE_CONTEXT[selectedMenu].CHAMGE_MENU, payload: { selected } })
    },
    [selectedMenu, dispatch]
  )

  useEffect(() => {
    setTimeout(() => {
      const menuTop = menuRef.current?.offsetTop
      setOffSet(menuTop)
    }, 1000);
  }, [setOffSet])

  return (
    <>
      <span ref={menuRef}></span>
      <Sticky topOffset={offset}>
        {({ style, isSticky }) => (
          <S.Container style={style} isSticky={isSticky}>
            {listMenu.map(({ itens, ...rest }, index) => (
              <Item
                key={index}
                {...rest}
                onClick={handleClick}
                active={state.menu.selected}
                showDivider={total !== index}
              />
            ))}
          </S.Container>
        )}
      </Sticky>
    </>
  )
}

export default Menu
