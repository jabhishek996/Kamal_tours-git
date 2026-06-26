import './Home.css';
import WhatsAppButton from "../components/whats_app_chat/whatsApp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const handleWhatsApp = (vehicle) => {
  const phoneNumber = "918956355200"; // replace with your number

  const message = `Hi, I want to book ${vehicle} . Please share details.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


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
              <h3>Easy Booking</h3>
    <p>Book your ride quickly with simple and hassle-free process.</p>
            </div>

            <div className="feature">
               <h3>Comfortable Vehicles</h3>
    <p>Well-maintained cars with AC for a smooth and relaxing journey.</p>
            </div>

            <div className="feature">
               <h3>24/7 Service</h3>
    <p>Available anytime for local trips, outstation travel, and tours.</p>
            </div>
          </div>
        </div>
      </section>

   <section className="vehicles-section">
      <div className="container">
        <h2 className="section-title">Our Vehicles</h2>
        <p className="section-subtitle">
          Comfortable rides for every journey
        </p>

     <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  centeredSlides={true}
  loop={true}

  navigation
  pagination={{ clickable: true }}

  autoplay={{ delay: 2500, disableOnInteraction: false }}

  // 👇 MOBILE MAGIC SETTINGS
  grabCursor={true}
  touchRatio={1}
  touchAngle={45}
  resistance={true}
  resistanceRatio={0.85}
  longSwipes={true}
  longSwipesRatio={0.3}
  shortSwipes={true}
  threshold={5}
  followFinger={true}
  speed={600}

  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>

 {/* Aura */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/aura.png" alt="Aura" />
              <h3>Maruti Suzuki Aura</h3>
              <p className="info">🚗 4 Seater | ❄️ AC</p>
              <p className="price">₹12/km</p>
             <button
  className="book-btn"
  onClick={() => handleWhatsApp("Maruti Suzuki Aura")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>




          {/* Dzire */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/dzire.png" alt="Dzire" />
              <h3>Maruti Suzuki Dzire</h3>
              <p className="info">🚗 4 Seater | ❄️ AC</p>
              <p className="price">₹12/km</p>
             <button
  className="book-btn"
  onClick={() => handleWhatsApp("Maruti Suzuki Dzire")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>

          {/* Etios */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/etios.png" alt="Etios" />
              <h3>Toyota Etios</h3>
              <p className="info">🚗 4 Seater | ❄️ AC</p>
              <p className="price">₹13/km</p>
              <button
  className="book-btn"
  onClick={() => handleWhatsApp("Toyota Etios")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>

          {/* Xcent */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/xcent.png" alt="Xcent" />
              <h3>Hyundai Xcent</h3>
              <p className="info">🚗 4 Seater | ❄️ AC</p>
              <p className="price">₹12/km</p>
             <button
  className="book-btn"
  onClick={() => handleWhatsApp("Hyundai Xcent")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>

          {/* Ertiga */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/ertiga.png" alt="Ertiga" />
              <h3>Maruti Suzuki Ertiga</h3>
              <p className="info">🚙 6-7 Seater | ❄️ AC</p>
              <p className="price">₹16/km</p>
              <button
  className="book-btn"
  onClick={() => handleWhatsApp("Maruti Suzuki Ertiga")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>

          {/* Traveller */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/traveller.png" alt="Tempo Traveller" />
              <h3>Tempo Traveller</h3>
              <p className="info">🚐 17 Seater & 20 Seater | ❄️ AC</p>
              <p className="price">₹22/km(Non-AC) </p>
                <button
  className="book-btn"
  onClick={() => handleWhatsApp("Tempo Traveller")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>

          {/* Bus */}
          <SwiperSlide>
            <div className="vehicle-card">
              <img src="/vehicles/bus.png" alt="Bus" />
              <h3>Bus</h3>
              <p className="info">🚌 30-50 Seater | ❄️ AC</p>
              <p className="price">₹35/km</p>
              <button
  className="book-btn"
  onClick={() => handleWhatsApp("Bus")}
>
  Book Now
</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>


       <div className='whatsapp_link'> <WhatsAppButton /></div>


      {/* ✅ NEW SECTION */}
      <section className="why-choose">
        <h2>Why to Choose Kamal Tours & Travels</h2>

        <div className="why-cards">
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>   Experienced & Verified Drivers</div>
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg> 24×7 Customer Support</div>
          <div className="why-card"> <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>Both A/C Non A/C Vehicles</div>
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg> Transparent & Affordable Pricing</div>
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg> Flexible Pickup & Drop Timings</div>
          <div className="why-card"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg> Clean, Well Conditioned Vehicles</div>
          <div className="why-card"> <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>Easily Online & Phone Booking</div>
          <div className="why-card"> <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#47bd23"><path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z"/></svg>Passenger-Based Vehicle Options</div>
          
        </div>
<div className='whatsapp_link'> <WhatsAppButton /></div>
        
      </section>

    </>
  );
};

export default Home;