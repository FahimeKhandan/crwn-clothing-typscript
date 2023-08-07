import { useContext } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../product-card/ProductCard.component"

//styles
import './shop.style.scss'
import ProductPreview from "../product-preview/ProductPreview.component"
import { Route, Routes } from "react-router-dom"
import Category from "../category/category.component"

const Shop = () => {
  return (
   <div className="products-container">
     <Routes>
      <Route index element={<ProductPreview />}></Route>
      <Route element={<Category />} path=":category"></Route>
    </Routes>
   </div>
  )
}

export default Shop
