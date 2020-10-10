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
      <MenuItem onClick={onClickItem} title="Entradas" name="entradas" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} title="Pratos Principais" name="principais" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} title="Sushi & Roll" name="sushi" active={active} />
      <S.Divider />
      <MenuItem onClick={onClickItem} title="Sobremesas" name="sobremesas" active={active} />
    </S.Container>
  )
}

export default Menu
