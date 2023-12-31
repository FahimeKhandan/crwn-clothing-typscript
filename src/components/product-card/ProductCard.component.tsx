// styles
import './producu-card.style.scss'

//types
import { Product } from '../../types'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }: { product: Product }) => {
    const { name, price, imageUrl } = product
    const { addItemsToCart } = useContext(CartContext)

    const addProductToCart = () =>
        addItemsToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard