import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Browser router to make the route work
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { unstable_HistoryRouter } from 'react-router-dom' 
import { MemoryRouter } from 'react-router-dom'  //store the route in the memory, used for the test purpose 
// import {NativeRouter} from 'react-router-native'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
)
