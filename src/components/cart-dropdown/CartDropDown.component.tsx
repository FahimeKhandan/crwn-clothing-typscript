import Button from '../button/button.component'
import './cart-drop-down.style.scss'

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-item'></div>
            <Button>Go to checkouts</Button>
        </div>
    )
}

export default CartDropDown