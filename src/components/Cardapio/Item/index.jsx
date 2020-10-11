import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'

import IconFavoritos from '../../Icons/Favoritos'
import IconShoyu from '../../Icons/Shoyu'
import IconVegano from '../../Icons/Vegano'
import IconNoLactose from '../../Icons/NoLactose'
import IconNoGluten from '../../Icons/NoGluten'
import IconMeiaPorcao from '../../Icons/MeiaPorcao'

import Modal from '../../Modal'

import * as S from './styles'

const getTypeUrl = selected => {
  if (selected === 'comidas') return 'eat'
  else return 'drink'
}

const Item = ({ nome, legenda, imagens, ...rest }) => {
  const menuSelected = useSelector(state => state.menu.selected)
  const modalRef = useRef(null)
  const handleOpenModal = useCallback(() => modalRef.current?.openModal(), [modalRef])

  const typeUrl = getTypeUrl(menuSelected)
  const img = imagens[0] ?? '';

  const baseUrl = `http://www.jam.com.br/Images/cardapio/${typeUrl}/`;

  return (
    <>
      <S.Container onClick={handleOpenModal}>
        <S.Image src={`${baseUrl}${img}`} loading="lazy" />

        <S.Description>
          <S.Title>{nome}</S.Title>
          <S.Icons>
            {legenda.favorito && <IconFavoritos white />}
            {legenda.usarShoyu && <IconShoyu white />}
            {legenda.vegano && <IconVegano white />}
            {legenda.semLactose && <IconNoLactose white />}
            {legenda.semGluten && <IconNoGluten white />}
            {legenda.meiaPorcao && <IconMeiaPorcao white />}
          </S.Icons>
        </S.Description>
      </S.Container>
      <Modal ref={modalRef} {...rest} nome={nome} legenda={legenda} imagens={imagens} baseUrl={baseUrl} />
    </>
  )
}

export default Item
