import CategoryGrid from '../../components/CategoryGrid/CategoryGrid';
import { categories } from '../../data/categories';
import './Catalog.css';

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog-content">
        <h1>Каталог автозапчастей</h1>
        <CategoryGrid categories={categories} />
      </div>
    </div>
  );
}

export default Catalog;