import { Link } from 'react-router-dom';

function CategoryCard({ name, image, description }) {
  return (
    <Link to={`/catalog/${name.toLowerCase()}`} className="category-card">
      <div className="category-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="category-content">
        <h3>{name}</h3>
        {description && <p className="category-description">{description}</p>}
      </div>
    </Link>
  );
}

export default CategoryCard;