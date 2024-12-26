import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PopularSection from '../components/PopularSection';

function Home() {
  return (
    <div className="home">
      <Hero />
      <PopularSection />
    </div>
  );
}

export default Home;