import React from 'react'

import * as S from './styles'

const MenuItem = ({ onClick, active, name, title }) => {
  return (
    <S.Button
      type="button"
      onClick={event => onClick(name)}
      active={active === name}>
      {title}
    </S.Button>
  )
}

export default MenuItem
