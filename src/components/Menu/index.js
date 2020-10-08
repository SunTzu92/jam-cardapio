import React, { useCallback, useState } from 'react'

import * as S from './styles'

function Menu() {
  const [active, setActive] = useState('entradas')

  const onClickItem = useCallback((target, event) => {
    setActive(target)
  }, [])

  return (
    <S.Container>
      <S.Button
        type="button"
        onClick={onClickItem.bind(this, 'entradas')}
        active={active === 'entradas'}>
        Entradas
      </S.Button>
      <S.Divider />
      <S.Button
        type="button"
        onClick={onClickItem.bind(this, 'principais')}
        active={active === 'principais'}>
        Pratos Principais
      </S.Button>
      <S.Divider />
      <S.Button
        type="button"
        onClick={onClickItem.bind(this, 'sushi')}
        active={active === 'sushi'}>
        Sushi {'&'} Roll
      </S.Button>
      <S.Divider />
      <S.Button
        type="button"
        onClick={onClickItem.bind(this, 'sobremesas')}
        active={active === 'sobremesas'}>
        Sobremesas
      </S.Button>
    </S.Container>
  )
}

export default Menu
