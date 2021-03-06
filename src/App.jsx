﻿import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { StickyContainer } from 'react-sticky'
import { withOrientationChange } from 'react-device-detect'

import Menu from './components/Menu'
import Banner from './components/Banner'
import Cardapio from './components/Cardapio'
import Legenda from './components/Legenda'

import { OrientationProvider } from './context/orientation'

import * as actionsBebida from './actions/actionsBebida'
import * as actionsComida from './actions/actionsComida'

const StyleContainer = styled(StickyContainer)`
  display: flex;
  flex-direction: column;
  background-color: #000;
  height: 100%;
  padding-bottom: 5rem;
  width: 100%;
`

function App({ isLandscape, isPortrait }) {
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
    <OrientationProvider value={{ isLandscape, isPortrait }}>
      <StyleContainer>
        <Banner />
        <Menu />
        <Legenda />
        <Cardapio />
      </StyleContainer>
    </OrientationProvider>
  )
}

export default withOrientationChange(App)
