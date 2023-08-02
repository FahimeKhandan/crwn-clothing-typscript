import { Link } from 'react-router-dom'

import CrwnLogo from '../../assets/crown.svg'

import './navigation.style.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img src={CrwnLogo} alt="Your SVG" className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/signIn">
          SIGN IN
        </Link>
      </div>
    </div>
  )
}

export default Navigation
