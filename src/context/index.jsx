import React, { useState, useCallback, createContext } from 'react'

const initContext = {
  bebidas: [],
  comidas: [],

  menuSelected: 'bebida',

  menu: {
    bebida: {
      itens: [{ id: 1, title: 'Não Alcoólicos' }]
    },
    comida: []
  }
}

export const AppContext = createContext(initContext)

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        ...initContext
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
