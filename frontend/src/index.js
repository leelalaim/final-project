import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import Favicon from 'react-favicon'

ReactDOM.render(
  <>
    <Favicon url='https://favicon.io/emoji-favicons/yellow-square/' />
    <App />
  </>
, document.getElementById('root'))
