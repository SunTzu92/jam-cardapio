import React, { useCallback, useState } from 'react'

import IconFavoritos from '../Icons/Favoritos'
import IconShoyu from '../Icons/Shoyu'
import IconVegano from '../Icons/Vegano'
import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'
import IconMeiaPorcao from '../Icons/MeiaPorcao'

import * as S from './styles'

const Legenda = () => {
  const [active, setActive] = useState({
    favoritos: true,
    usarShoyu: true,
    vegetariano: true,
    semLactose: true,
    semGluten: true,
    meiaPorcao: true
  })

  const clicaLegenda = useCallback((target, event) => {
    if (event && event.detail !== 1) return

    setActive((state) => ({
      ...state,
      [target]: !state[target]
    }))
  }, [])

  return (
    <S.Container>
      <S.Item
        onClick={(event) => clicaLegenda('favoritos', event)}
        checked={active['favoritos']}
      >
        <IconFavoritos />
        <span>Favoritos</span>
      </S.Item>
      <S.Item
        onClick={(event) => clicaLegenda('usarShoyu', event)}
        checked={active['usarShoyu']}
      >
        <IconShoyu />
        <span>Usar Shoyu</span>
      </S.Item>
      <S.Item
        onClick={(event) => clicaLegenda('vegetariano', event)}
        checked={active['vegetariano']}
      >
        <IconVegano />
        <span>Vegetariano</span>
      </S.Item>
      <S.Item
        onClick={(event) => clicaLegenda('semLactose', event)}
        checked={active['semLactose']}
      >
        <IconNoLactose />
        <span>Sem Lactose</span>
      </S.Item>
      <S.Item
        onClick={(event) => clicaLegenda('semGluten', event)}
        checked={active['semGluten']}
      >
        <IconNoGluten />
        <span>Sem Glúten</span>
      </S.Item>
      <S.Item
        onClick={(event) => clicaLegenda('meiaPorcao', event)}
        checked={active['meiaPorcao']}
      >
        <IconMeiaPorcao />
        <span>Meia Porção</span>
      </S.Item>
    </S.Container>
  )
}

export default Legenda
