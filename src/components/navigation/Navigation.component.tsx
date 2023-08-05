// react
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import CrwnLogo from '../../assets/crown.svg'

// styles
import './navigation.style.scss'

// context
import { UserContext } from '../../contexts/user.context'

//firebase
import { signOutUser } from '../../utils/firebase/firebase.utils.js'
import CartIcon from '../cart-icon/CartIcon.component.js'
import CartDropDown from '../cart-dropdown/CartDropDown.component.js'
import { CartContext } from '../../contexts/cart.context.js'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <img src={CrwnLogo} alt="Your SVG" className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/authentication">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen &&
        <CartDropDown />}

    </div>
  )
}

export default Navigation
