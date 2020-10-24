import React, { createContext } from 'react'

const INITIAL_STATE = {
  isLandscape: false,
  isPortrait: false
}

export const OrientationContext = createContext(INITIAL_STATE)

export const OrientationProvider = ({ children, value }) => {
  return (
    <>
      <OrientationContext.Provider value={value}>{children}</OrientationContext.Provider>
    </>
  )
}
