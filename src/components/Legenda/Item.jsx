import React from 'react'

import IconFavoritos from '../Icons/Favoritos'
import IconShoyu from '../Icons/Shoyu'
import IconVegano from '../Icons/Vegano'
import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'
import IconMeiaPorcao from '../Icons/MeiaPorcao'

import * as S from './styles'

const tipoIcone = {
  favorito: IconFavoritos,
  usarShoyu: IconShoyu,
  vegano: IconVegano,
  semLactose: IconNoLactose,
  semGluten: IconNoGluten,
  meiaPorcao: IconMeiaPorcao
}

const Item = ({ title, name, active }) => {
  const Icon = tipoIcone[name]
  return (
    <S.Item>
      <span>{<Icon />}</span>
      {title}
    </S.Item>
  )
}

export default Item
