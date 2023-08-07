import { useParams } from 'react-router-dom'

import './category.style.scss'
import { useContext, useEffect, useState } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../product-card/ProductCard.component'
import { Product } from '../../types'

const Category = () => {
    const { category } = useParams<string>()
    const { categoriesMap } = useContext(CategoriesContext)
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        setProduct(categoriesMap[category])
    }, [categoriesMap])

    return (
        <>
            <h1>{category}</h1>
            <div className='category-container'>
                {product && product.map((product) =>
                    <ProductCard key={product.id} product={product} />)}
            </div>
        </>

    )
}

export default Category