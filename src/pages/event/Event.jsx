import { Link } from "react-router-dom"

const Event = () => {
  return (
    <div>
        <h1>Events</h1>
        <hr />
        <Link to='/event/1'>Event One</Link> <br />
        <Link to='/event/2'>Event two</Link> <br />
        <Link to='/event/3'>Event three</Link> <br />
        <Link to='/event/abc'>Event abc</Link>
        

    </div>
  )
}

export default Event