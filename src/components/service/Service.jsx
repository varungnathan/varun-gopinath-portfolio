// src/components/service/Service.jsx

import './service.css';
import { FaLaptopCode, FaSearch, FaPalette, FaMobileAlt, FaTools, FaRocket, FaServer, FaGoogle } from 'react-icons/fa';
import { SiWordpress, SiShopify } from 'react-icons/si';

const services = [
  { name: 'Web Development', icon: <FaLaptopCode className="service-icon" /> },
  { name: 'SEO Management', icon: <FaSearch className="service-icon" /> },
  { name: 'UI/UX Design', icon: <FaPalette className="service-icon" /> },
  { name: 'Mobile App Development', icon: <FaMobileAlt className="service-icon" /> },
  { name: 'WordPress Development', icon: <SiWordpress className="service-icon" /> },
  { name: 'Shopify & WooCommerce', icon: <SiShopify className="service-icon" /> },
  { name: 'Website Hosting', icon: <FaServer className="service-icon" /> },
  { name: 'Site Maintenance', icon: <FaTools className="service-icon" /> },
  { name: 'Website Speed Optimization', icon: <FaRocket className="service-icon" /> },
  { name: 'Google Analytics Setup', icon: <FaGoogle className="service-icon" /> }
];

const Service = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__grid">
        {services.map((service, index) => (
          <div className="service__item" key={index}>
            <div className="service__icon-wrapper">{service.icon}</div>
            <span className="service__name">{service.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;