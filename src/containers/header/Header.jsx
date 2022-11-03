import { Link } from "react-router-dom"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <h2>EcommerceShop</h2>
            </Link>
        </div>
    </div>
  )
}

export default Header