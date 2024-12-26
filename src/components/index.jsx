import { Link } from 'react-router-dom';
import '../styles/styles.css';

export const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container nav-container">
				<Link to="/" className="logo">TechAutoMagic</Link>
				<div className="menu">
					<Link to="/catalog">Каталог</Link>
					<Link to="#">Доставка</Link>
					<Link to="#">Контакты</Link>
					<a href="tel:+79990099066">+7 (999) 009 06 66</a>
				</div>
			</div>
		</nav>
	);
};

export const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<h1>Автозапчасти для вашего автомобиля</h1>
				<p>Доставим по всей России. Лучшие цены.</p>
				<Link to="/catalog" className="btn">
					Каталог
				</Link>
			</div>
		</div>
	);
};

export const CategoryCard = ({ name, image, description }) => {
	return (
		<Link to={`/catalog/${name.toLowerCase()}`} className="card">
			<div className="card-image">
				<img src={image} alt={name} />
			</div>
			<div className="card-content">
				<h3>{name}</h3>
				{description && <p className="card-desc">{description}</p>}
			</div>
		</Link>
	);
};

export const PopularSection = ({ categories }) => {
	return (
		<section className="section">
			<div className="container">
				<h2>ВИДЫ самых часто покупаемых запчастей</h2>
				<div className="grid">
					{categories.map((category, index) => (
						<CategoryCard key={index} {...category} />
					))}
				</div>
			</div>
		</section>
	);
};