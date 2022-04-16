import './Home.css';

import homeImage from '../../assets/luana-azevedo-OYVaNuVoqVw-unsplash.jpg';

const Home = () => {

  return (
    <section className="home">
      <div className="img-container">
        <img src={homeImage} alt="Guitar image" />
      </div>

      <div className="title-container">
        <h1 className="home-title">Your place for second hand instruments</h1>
        <h2 className="home-secondary-title">Browse our categories to find what suits you most</h2>
      </div>
    </section>

  )
}

export default Home;