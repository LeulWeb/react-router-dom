import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const EventDetail = () => {

    // How we can access the url ?
    const {id} = useParams()

  return (
    <div>
        <h1>EventDetail for {id}</h1>
        <Link to='/event'> Go Back</Link>
    </div>
  )
}

export default EventDetail