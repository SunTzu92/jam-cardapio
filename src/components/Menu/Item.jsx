import React from 'react'

import * as S from './styles'

const MenuItem = ({ onClick, active, name }) => {
  return (
    <S.Button
      type="button"
      onClick={event => onClick(name)}
      active={active === name}>
      Entradas
    </S.Button>
  )
}

export default MenuItem
