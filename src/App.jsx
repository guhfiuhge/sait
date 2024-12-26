import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, PopularSection } from './components';
import { categories } from './data/categories';
import Catalog from './pages/Catalog/Catalog';
import Delivery from './pages/Delivery/Delivery';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <PopularSection categories={categories} />
            </>
          } />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
