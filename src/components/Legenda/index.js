import React, { useCallback, useState } from 'react'
import { WiRaindrop } from 'react-icons/wi'
import { AiFillApple, AiFillStar } from 'react-icons/ai'

import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'

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
        mLeft="0.25rem"
        onClick={(event) => clicaLegenda('favoritos', event)}
        checked={active['favoritos']}
      >
        <AiFillStar size={15} className="icon--ai" />
        <span>Favoritos</span>
      </S.Item>
      <S.Item
        mLeft="-2px"
        onClick={(event) => clicaLegenda('usarShoyu', event)}
        checked={active['usarShoyu']}
      >
        <WiRaindrop size={25} />
        <span>Usar Shoyu</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={(event) => clicaLegenda('vegetariano', event)}
        checked={active['vegetariano']}
      >
        <AiFillApple size={15} className="icon--ai" />
        <span>Vegetariano</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={(event) => clicaLegenda('semLactose', event)}
        checked={active['semLactose']}
      >
        <IconNoLactose />
        <span>Sem Lactose</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={(event) => clicaLegenda('semGluten', event)}
        checked={active['semGluten']}
      >
        <IconNoGluten />
        <span>Sem Glúten</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={(event) => clicaLegenda('meiaPorcao', event)}
        checked={active['meiaPorcao']}
      >
        <span>Meia Porção</span>
      </S.Item>
    </S.Container>
  )
}

export default Legenda
