import { useContext } from "react"
import { ProductsContext } from "../../contexts/product.context"
import ProductCard from "../product-card/ProductCard.component"

//styles
import './shop.style.scss'

// types 
import { Product } from "../../types"

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (<div className="products-container">
    {
      products.map((product: Product) => <ProductCard product={product} key={product.id} />)
    }
  </div>)
}

export default Shop
