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

        <span className="nav-link">SIGN OUT</span>
      </div>
    </div>
  )
}

export default Navigation
