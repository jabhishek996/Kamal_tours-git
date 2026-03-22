import './Services.css';

const services = [
  "Intercity Cab Services",
  "Airport Pickup & Drop",
  "Outstation Tours & Packages",
  "Corporate & Business Travel",
  "Local Nashik Taxi Service",
  "Gujrat Darshan Tours",
  "Maharashtra Darshan Tours",
];



const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">🚖 </div>
            <h3>{service}</h3>
            <p>
              Reliable and comfortable travel solutions tailored for your needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;