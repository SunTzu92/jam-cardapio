import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Menu from './components/Menu'
import Banner from './components/Banner'
import Cardapio from './components/Cardapio'
import Legenda from './components/Legenda'

import * as actionsBebida from './actions/actionsBebida'
import * as actionsComida from './actions/actionsComida'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100%;
  padding-bottom: 5rem;
`

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadFile() {
      const responseBebida = await fetch(
        `${process.env.REACT_APP_DOMAIN_BASE_STRUCTURE}/cardapio-bebidas.json`
      )
      const responseComida = await fetch(
        `${process.env.REACT_APP_DOMAIN_BASE_STRUCTURE}/cardapio-comida.json`
      )

      const { categorias: bebidas } = await responseBebida.json()
      const { categorias: comidas } = await responseComida.json()

      dispatch(actionsBebida.loadSuccess(bebidas))
      dispatch(actionsComida.loadSuccess(comidas))
    }

    loadFile()
  }, [dispatch])

  return (
    <StyleContainer>
      <Banner />
      <Menu />
      <Legenda />
      <Cardapio />
    </StyleContainer>
  )
}

export default App
