import React, { useCallback, useState } from 'react'

import MenuItem from './Item'

import * as S from './styles'

function Menu() {
  const [active, setActive] = useState('entradas')

  const onClickItem = useCallback((target, event) => {
    setActive(target)
  }, [])

  return (
    <S.Container>
      <MenuItem onClick={onClickItem} name="entradas" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} name="principais" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} name="sushi" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} name="sobremesas" active={active} />
      <S.Divider />
    </S.Container>
  )
}

export default Menu
