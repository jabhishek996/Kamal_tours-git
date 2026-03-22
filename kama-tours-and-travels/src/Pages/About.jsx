import './About.css';
import './Home.css';

const About = () => {
  return (
    <section className="hero">
      <div className="hero-overlay about-overlay">
        <div className='about-container'>
        <h1>About Us</h1>
        <p>
         <strong >Kamal Tours and Travels</strong> , based in Nashik, is dedicated to providing reliable,
          comfortable, and affordable travel services across Maharashtra and India.
          We specialize in passenger transport to key destinations like Mumbai, Pune,
          Chhatrapati Sambhaji Nagar, and Ahilyanagar.
        </p>

        <p>
          With a strong focus on safety, punctuality, and customer satisfaction, we ensure
          every journey is smooth and stress-free. Whether it’s daily travel, business trips,
          or group bookings, our services are designed to meet diverse travel needs.
        </p>

        <p className="highlight">
          Your journey truly begins with us.
        </p>
    </div>  </div>
    </section>
  );
};

export default About;