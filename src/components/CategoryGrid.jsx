import CategoryCard from './CategoryCard';

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