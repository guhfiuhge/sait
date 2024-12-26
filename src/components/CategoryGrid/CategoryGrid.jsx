import CategoryCard from '../CategoryCard/CategoryCard';
import './CategoryGrid.css';

function CategoryGrid({ categories }) {
  return (
    <div className="categories-grid">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
}

export default CategoryGrid;