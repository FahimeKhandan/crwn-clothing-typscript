import { useContext } from "react"
import { CartItem } from "../../types"
import { CartContext } from "../../contexts/cart.context"

//styles
import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem }: { cartItem: CartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    const { removeItemsFromCart, decreseItemQuantity, addItemsToCart } = useContext(CartContext)

    const removeProduct = () => {
        removeItemsFromCart(cartItem)
    }

    const increaceQuantity = () => addItemsToCart(cartItem)
    const decreaseQuantity = () => decreseItemQuantity(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <div className="arrow" onClick={decreaseQuantity}>&#10094;</div>
                {quantity}
                <div className="arrow" onClick={increaceQuantity}>&#10095;</div>
            </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={removeProduct}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem