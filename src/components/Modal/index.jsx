import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react'
import { GrClose } from 'react-icons/gr'

import Portal from '../Portal'
import IconFavoritos from '../Icons/Favoritos'
import IconShoyu from '../Icons/Shoyu'
import IconVegano from '../Icons/Vegano'
import IconNoLactose from '../Icons/NoLactose'
import IconNoGluten from '../Icons/NoGluten'
import IconMeiaPorcao from '../Icons/MeiaPorcao'

import * as S from './styles'

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 1000,
  initialSlide: 0,
}

const Modal = ({ children, imagens, descricao, legenda, nome, observacoes, opcoes, preco }, ref) => {
  const [visible, setVisible] = useState(false)

  const exibirPreco = !opcoes.length;

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => ({
    openModal
  }))

  const handlerCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <Portal open={visible}>
      <S.Container visible={visible} ref={ref} onClick={handlerCloseModal}>
        <S.Content onClick={(event) => event.stopPropagation()}>
          <S.Actions>
            <button type="button" onClick={handlerCloseModal}>
              Fechar
              <GrClose color="#fff" />
            </button>
          </S.Actions>

          <S.Card>
          <S.CardTitle>{nome}</S.CardTitle>

            <S.Slider settings={settings}>
              {imagens.map((img, index) => (
                <S.Image key={index} src={img} />
              ))}
            </S.Slider>

            <S.CardDescription>
              <span>
                <strong>DESCRIÇÃO: </strong>
                {descricao}
              </span>
            </S.CardDescription>

            <S.Divider />

            {!exibirPreco && (
              <>
                <S.Opcoes>
                  <h4>OPÇÕES</h4>
                  {opcoes.map((opc, idx) => (
                    <S.OpcoesContent key={idx}>
                      <S.Tipo>{opc.nome}</S.Tipo>
                      <S.Preco>{opc.preco}</S.Preco>
                    </S.OpcoesContent>
                  ))}
                </S.Opcoes>

                <S.Divider />
              </>
            )}

            {exibirPreco && (
              <>
                <S.CardPreco>
                  <strong>Preço: {preco}</strong>
                </S.CardPreco>
                <S.Divider />
              </>
            )}

            <S.Classificacao>
              <S.ClassificacaoDescription>
                OBSERVAÇÕES: {observacoes}
              </S.ClassificacaoDescription>

              <S.Icons>
                {legenda.favorito && <IconFavoritos white />}
                {legenda.usarShoyu && <IconShoyu white />}
                {legenda.vegano && <IconVegano white />}
                {legenda.semLactose && <IconNoLactose white />}
                {legenda.semGluten && <IconNoGluten white />}
                {legenda.meiaPorcao && <IconMeiaPorcao white />}
              </S.Icons>
            </S.Classificacao>
          </S.Card>
        </S.Content>
      </S.Container>
    </Portal>
  )
}

export default forwardRef(Modal)
