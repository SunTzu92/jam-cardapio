import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #9e9d9d;
  margin: 0.75rem 0;
`

export const Opcoes = styled.div`
  h4 {
    margin: 0;
    margin-bottom: 1rem;
  }
`

export const OpcoesContent = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const Tipo = styled.div`
  padding-right: 1rem;
`

export const Preco = styled.div`
  flex: 1;
`

export const CardPreco = styled.div``

export const Classificacao = styled.div`
  display: flex;
  flex-direction: column;

  & figure {
    margin-right: 0.5rem;
  }

  & > span {
    margin-right: 1rem;
  }
`

export const ClassificacaoDescription = styled.div`
  margin-bottom: 0.5rem;
`

export const Icons = styled.div`
  display: flex;
  width: 100%;
`
