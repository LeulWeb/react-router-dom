import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Event from './pages/event/Event'
import Training from './pages/Training'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import EventDetail from './pages/event/EventDetail'
import Upcoming from './pages/event/Upcoming'
import NotFound from './pages/NotFound'
import EventLayout from './pages/event/layout'
import Edit from './pages/Edit'
import UserInfo from './pages/UserInfo'
import HeaderNav from './components/HeaderNav'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
// Define the routed in the App component



function App() {


  return (
    <>


      {/* <Routes>
       <Route path='/about' element={<h1>This is from External route</h1>} />
      </Routes> */}

      <HeaderNav/>

      <h1>R E A C T   R O U T E R   D O M </h1>


     <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/event' element={<Event/>}></Route> */}
        {/* Dynamic routing using react router dom  */}
        {/* <Route path='/event/:id' element={<EventDetail/>}></Route> */}

        {/* BrainStorm  */}
        {/* <Route path='/event/upcoming' element={<Upcoming/>}></Route> */}


        {/* which page will render the Upcoming or the EventDetail with id of upcoming   React Router V6 */}

        <Route path='/training' element={<Training/>}></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        {/* <Route path='/abc' element={<Product/>}></Route> */}
        {/* <Route path='/abc/:id' element={<ProductDetail/>}></Route> */}





          {/* How to nest routes */}
          <Route path='/event' element={<EventLayout/>}>
            {/* How can we show if the user visits the /event page  */}
            <Route index element={<Event/>}/>
            <Route path=':id' element={<EventDetail/>}></Route>
            <Route path='upcoming' element={<Upcoming/>}></Route>
            {/* We can create our own common layout */}
          </Route>
      
        {/* Fall back error page */}
        <Route path='*' element={<NotFound />}></Route>
     </Routes>


     {/* <h1>Howdy this is Footer</h1> */}
    </>
  )
}

export default App





// npm i react-router-dom
//snake_case
//camelCase
//PascalCase