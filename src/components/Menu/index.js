import React, { useCallback, useState } from 'react'

import * as S from './styles'

function Menu() {
  const [active, setActive] = useState({
    entradas: true,
    principais: true,
    sushi: true,
    sobremesas: true
  })

  const clicaMenu = useCallback(
    (target, event) => {
      console.log('target: ', target)
      console.log('active: ', active)
      console.log('sushi: ', active['sushi'])
      console.log('active_target: ', active[target])
      console.log('--------------------')
      active[target] = !active[target]
      setActive(active)
    },
    [active]
  )

  return (
    <S.Container>
      <S.Button
        type="button"
        onClick={clicaMenu.bind(this, 'entradas')}
        active={active['entradas']}
      >
        Entradas
      </S.Button>
      <S.Divider />
      <S.Button
        type="button"
        onClick={clicaMenu.bind(this, 'principais')}
        active={active['principais']}
      >
        Pratos Principais
      </S.Button>
      <S.Divider />
      <S.Button type="button" onClick={clicaMenu.bind(this, 'sushi')} active={active['sushi']}>
        Sushi {'&'} Roll
      </S.Button>
      <S.Divider />
      <S.Button
        type="button"
        onClick={clicaMenu.bind(this, 'sobremesas')}
        active={active['sobremesas']}
      >
        Sobremesas
      </S.Button>
    </S.Container>
  )
}

export default Menu
