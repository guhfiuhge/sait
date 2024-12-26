import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-content">
				<Link to="/" className="nav-logo">
					Logo
				</Link>
				<div className="nav-links">
					<Link to="/catalog" className="nav-link">Каталог</Link>
					<Link to="/delivery" className="nav-link">Доставка</Link>
					<Link to="/contacts" className="nav-link">Контакты</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;