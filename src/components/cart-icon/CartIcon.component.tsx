// styles
import './cart-icon.style.scss'

// images
import ShoppingIcon from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
    const { cartCount } = useContext(CartContext)

    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <img src={ShoppingIcon} alt='shopping-icon' className="shopping-icon" />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon