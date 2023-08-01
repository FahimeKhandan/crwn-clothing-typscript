// components
import CategoryItem from '../category-item/CategoryItem.component'

// styles
import './categories.style.scss'

//  types
import { Category } from '../../types/index'

const Categories = ({ categories }: { categories: Array<Category> }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Categories
