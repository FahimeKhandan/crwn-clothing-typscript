import { useContext } from 'react'
import CartItemComponent from '../cart-item/CartItem.component'
import './cart-drop-down.style.scss'
import { CartContext } from '../../contexts/cart.context'
import { CartItem } from '../../types'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/button.component'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckout = () => navigate('/checkout')

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item: CartItem) =>
                    <CartItemComponent key={item.id} cartItem={item} />)
                }
            </div>
            <Button onClick={goToCheckout}>Go to checkouts</Button>
        </div>
    )
}

export default CartDropDown