import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'intersection-observer'

import store from './store'
import App from './App'

const rootEl = document.querySelector('[data-react-app="cardapio"]')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    )
  })
}
