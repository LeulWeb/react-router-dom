import React from 'react'
import { Outlet } from 'react-router-dom'

const EventLayout = () => {
  return (
    <div>
        EventLayout
        <hr />
        <Outlet  />   
         {/* Outlets allow us to render component  based on the route   */}
        <hr />
        <p>This is a footer page</p>
    </div>
  )
}

export default EventLayout