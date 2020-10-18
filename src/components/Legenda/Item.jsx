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

const Item = ({ title, name, selected, onClick }) => {
  const Icon = tipoIcone[name]
  const active = selected.includes(name)
  return (
    <S.Item onClick={(event) => onClick(name)} active={active}>
      <span>{<Icon />}</span>
      {title}
    </S.Item>
  )
}

export default Item
