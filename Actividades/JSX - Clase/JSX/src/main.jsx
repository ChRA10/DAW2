import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import "./index.css"

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
  /*<React.Fragment>
      {Button({texto: "Boton 1"})}
      <Button texto="Botón 2"/>
      <Button texto="Botón 3"/>
  </React.Fragment>*/
)
