import './Home.css';
import WhatsAppButton from "../components/whats_app_chat/whatsApp";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>We Offer Best Quality Customer Service!</h1>
            <p>
             Travell All over Maharashtra and India with Kamal Tours & Travels. Reliable, Comfortable, Affordable. Book Now for a Smooth Journey!
            </p>
            <button 
  className="hero-btn"
  onClick={() => window.location.href = "tel:+918956355200"}
>
  Contact Now
</button>
          </div>

          <div className="features">
            <div className="feature">
              <h3>Any Questions</h3>
              <p>We are here to help you anytime.</p>
            </div>

            <div className="feature">
              <h3>Online Support</h3>
              <p>24/7 online support available.</p>
            </div>

            <div className="feature">
              <h3>24/7 Call Center</h3>
              <p>Always ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ NEW SECTION */}
      <section className="why-choose">
        <h2>Why Choose Kamal Tours & Travels</h2>

        <div className="why-cards">
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#75FB4C"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>   Experienced & Verified Drivers</div>
          <div className="why-card">24×7 Customer Support</div>
          <div className="why-card">Transparent & Affordable Pricing</div>
          <div className="why-card">Flexible Pickup & Drop Timings</div>
          <div className="why-card">Clean, Sanitized Vehicles</div>
          <div className="why-card">Hassle-free Online & Phone Booking</div>
        </div>
<div className='whatsapp_link'> <WhatsAppButton /></div>
        
      </section>
    </>
  );
};

export default Home;