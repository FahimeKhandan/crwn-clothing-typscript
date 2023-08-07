import { CartItem } from '../../types'
import './cart-item.style.scss'

const CartItemComponent = ({ cartItem }: { cartItem: CartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='item-count'>{quantity} x {price}</span>
            </div>
        </div>
    )
}


export default CartItemComponent