import React from 'react'

import * as S from './styles'

const MenuItem = ({ onClick, active, nome, slug }) => {
  return (
    <S.Button
      type="button"
      onClick={event => onClick(slug)}
      active={active === slug}>
      {nome}
    </S.Button>
  )
}

export default MenuItem
