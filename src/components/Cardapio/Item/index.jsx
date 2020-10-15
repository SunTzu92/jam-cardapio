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

const getTypeUrl = (selected) => {
  if (selected === 'comidas') return 'eat'
  else return 'drink'
}

const Item = ({ nome, legenda, imagens, preco, ...rest }) => {
  const menuSelected = useSelector((state) => state.menu.selected)
  const modalRef = useRef(null)
  const handleOpenModal = useCallback(() => modalRef.current?.openModal(), [modalRef])

  const typeUrl = getTypeUrl(menuSelected)
  const img = imagens[0] ?? ''

  const baseUrl = `http://www.jam.com.br/Images/cardapio/${typeUrl}/`

  return (
    <>
      <S.Container onClick={handleOpenModal}>
        <S.Image src={`${baseUrl}${img}`} loading="lazy" />

        <S.Description>
          <S.Title>{nome}</S.Title>

          <S.InfoPrice>
            <S.Price> {preco} </S.Price>
            <S.Icons>
              {(legenda.favorito || true) && <IconFavoritos white />}
              {(legenda.usarShoyu || true) && <IconShoyu white />}
              {(legenda.vegano || true) && <IconVegano white />}
              {(legenda.semLactose || true) && <IconNoLactose white />}
              {(legenda.semGluten || true) && <IconNoGluten white />}
              {(legenda.meiaPorcao || true) && <IconMeiaPorcao white />}
            </S.Icons>
          </S.InfoPrice>
        </S.Description>
      </S.Container>
      <Modal
        ref={modalRef}
        {...rest}
        nome={nome}
        legenda={legenda}
        imagens={imagens}
        preco={preco}
        baseUrl={baseUrl}
      />
    </>
  )
}

export default Item
