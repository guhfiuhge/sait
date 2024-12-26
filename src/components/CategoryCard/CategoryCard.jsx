import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ category }) {
	const { id, name, image, description } = category;
	
	return (
		<Link to={`/catalog/${id}`} className="category-card">
			<div className="category-image">
				<img src={image} alt={name} />
			</div>
			<div className="category-info">
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
		</Link>
	);
}

export default CategoryCard;