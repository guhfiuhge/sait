import CategoryGrid from '../components/CategoryGrid';
import { categories } from '../data/categories';

function Catalog() {
  return (
    <div className="catalog">
      <h2>ВИДЫ самых часто покупаемых запчастей</h2>
      <CategoryGrid categories={categories} />
    </div>
  );
}

export default Catalog;