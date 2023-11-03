
import { Link } from "react-router-dom"

const HeaderNav = () => {

    let routes = [
        {
            'path': '/',
            'label':'Home'
        },
        {
            'path': '/about',
            'label':'About'
        },
        {
            'path': '/contact',
            'label':'Contact'
        },
        {
            'path': '/training',
            'label':'Training'
        },
    ]



  return (
    <div>
        {
            routes.map((item, index)=><Link to={item.path}>{item.label}</Link>)
        }
    </div>
  )
}

export default HeaderNav