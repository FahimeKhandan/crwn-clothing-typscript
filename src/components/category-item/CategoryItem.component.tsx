import './category-item.style.scss'
// types
import { Category } from '../../types'

const CategoryItem = ({ category }: { category: Category }) => {
  const { imageUrl, title } = category
  return (
    <div className="directory-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
