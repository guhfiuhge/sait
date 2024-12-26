import Hero from '../../components/Hero/Hero';
import PopularSection from '../../components/PopularSection/PopularSection';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <PopularSection />
    </div>
  );
}

export default Home;