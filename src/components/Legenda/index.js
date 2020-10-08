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

  const clicaLegenda = useCallback(
    (target, event) => {
      active[target] = !active[target]
      setActive(active)
    },
    [active]
  )

  return (
    <S.Container>
      <S.Item
        mLeft="0.25rem"
        onClick={clicaLegenda.bind(this, 'favoritos')}
        active={active['favoritos']}
      >
        <AiFillStar size={15} className="icon--ai" />
        <span>Favoritos</span>
      </S.Item>
      <S.Item
        mLeft="-2px"
        onClick={clicaLegenda.bind(this, 'usarShoyu')}
        active={active['usarShoyu']}
      >
        <WiRaindrop size={25} />
        <span>Usar Shoyu</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={clicaLegenda.bind(this, 'vegetariano')}
        active={active['vegetariano']}
      >
        <AiFillApple size={15} className="icon--ai" />
        <span>Vegetariano</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={clicaLegenda.bind(this, 'semLactose')}
        active={active['semLactose']}
      >
        <IconNoLactose />
        <span>Sem Lactose</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={clicaLegenda.bind(this, 'semGluten')}
        active={active['semGluten']}
      >
        <IconNoGluten />
        <span>Sem Glúten</span>
      </S.Item>
      <S.Item
        mLeft="0.25rem"
        onClick={clicaLegenda.bind(this, 'meiaPorcao')}
        active={active['meiaPorcao']}
      >
        <span>Meia Porção</span>
      </S.Item>
    </S.Container>
  )
}

export default Legenda
