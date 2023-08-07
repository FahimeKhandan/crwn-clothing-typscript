import { useContext } from "react"
import CheckoutItem from "../checkout_item/CheckoutItem.component"
import { CartContext } from "../../contexts/cart.context"
import { CartItem } from "../../types"

//styles
import "./checkout.style.scss"

const Checkout = () => {
    const { cartItems, totalAmount } = useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Dwscription</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item: CartItem) => <CheckoutItem cartItem={item} key={item.id} />)}

            <span className="totoal">Total: {totalAmount}</span>
        </div>
    )
}
export default Checkout