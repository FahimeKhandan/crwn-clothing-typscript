import { useContext } from 'react'
import Button from '../button/button.component'
import CartItemComponent from '../cart-item/CartItem.component'
import './cart-drop-down.style.scss'
import { CartContext } from '../../contexts/cart.context'
import { CartItem } from '../../types'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item: CartItem) =>
                    <CartItemComponent key={item.id} cartItem={item} />)
                }
            </div>
            <Button>Go to checkouts</Button>
        </div>
    )
}

export default CartDropDown