import './styles/globals.css'

import * as React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Providers } from './components/Providers'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)