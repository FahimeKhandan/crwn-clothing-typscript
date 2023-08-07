import { useContext } from 'react'
import ProductCard from '../product-card/ProductCard.component'
import './product-preview.style.scss'
import { CategoriesContext } from '../../contexts/categories.context'

const ProductPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
        Object.keys(categoriesMap).map((title, index) =>
            <div className='category-preview-container' key={title + index}>
                <h2>
                    <span className='title'>{title.toUpperCase()}</span>
                </h2>
                <div className='preview'>
                    {
                        categoriesMap[title].filter((_, idx) => idx < 4).map(ctg =>
                            <ProductCard product={ctg} key={ctg.id} />)
                    }
                </div>
            </div>
        )
    )
}

export default ProductPreview