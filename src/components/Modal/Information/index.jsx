import React from 'react'

import IconFavoritos from '../../Icons/Favoritos'
import IconShoyu from '../../Icons/Shoyu'
import IconVegano from '../../Icons/Vegano'
import IconNoLactose from '../../Icons/NoLactose'
import IconNoGluten from '../../Icons/NoGluten'
import IconMeiaPorcao from '../../Icons/MeiaPorcao'

import * as S from './styles'

const InformationWrapper = ({ descricao, opcoes, preco, observacoes, legenda }) => {
  const exibirPreco = !opcoes.length

  return (
    <S.Container>
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
        <S.ClassificacaoDescription>OBSERVAÇÕES: {observacoes}</S.ClassificacaoDescription>

        <S.Icons>
          {legenda.favorito && <IconFavoritos white />}
          {legenda.usarShoyu && <IconShoyu white />}
          {legenda.vegano && <IconVegano white />}
          {legenda.semLactose && <IconNoLactose white />}
          {legenda.semGluten && <IconNoGluten white />}
          {legenda.meiaPorcao && <IconMeiaPorcao white />}
        </S.Icons>
      </S.Classificacao>
    </S.Container>
  )
}

export default InformationWrapper
