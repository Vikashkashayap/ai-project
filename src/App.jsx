
import React from 'react';
import './App.css';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Beverly Hills',
    price: '$4,500,000',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: '5 bed · 6 bath · 8,000 sqft',
  },
  {
    id: 2,
    title: 'Modern Apartment in New York',
    price: '$2,100,000',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80',
    description: '3 bed · 2 bath · 2,000 sqft',
  },
  {
    id: 3,
    title: 'Cozy Cottage in Aspen',
    price: '$1,250,000',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80',
    description: '2 bed · 2 bath · 1,200 sqft',
  },
];

const App = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home</h1>
          <p className="hero-subtitle">Browse luxury properties, apartments, and cottages across the country.</p>
          <a href="#contact" className="hero-contact-btn">Contact Us</a>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section">
        <div className="featured-content">
          <h2 className="featured-title">Featured Properties</h2>
          <div className="property-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="property-info">
                  <h3 className="property-title">{property.title}</h3>
                  <p className="property-desc">{property.description}</p>
                  <span className="property-price">{property.price}</span>
                  <button className="property-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2 className="contact-title">Ready to get started?</h2>
          <p className="contact-subtitle">Contact our team to schedule a viewing or get more information.</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" className="form-input" rows="4"></textarea>
            </div>
            <button type="submit" className="form-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;