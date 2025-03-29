// EdinaHomeSidebar.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../../header/Sidebar';
import Hero from '../../hero/Hero';
import About from '../../about/About';
import Service from '../../service/Service';
import Portfolio from '../../portfolio/Portfolio';
import Testimonial from '../../testimonial/Testimonial';
import Blog from '../../blog/Blog';
import Contact from '../../Contact';
import Address from '../../Address';
import Map from '../../Map';
import HeaderMobile from '../../header/HeaderMobile';

const EdinaHomeSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.querySelector('body').classList.remove('rtl');
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="home-light edina_tm_mainpart">
      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile setMenuOpen={setIsMenuOpen} />
        </div>
      </header>

      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      />

      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <Service />
        </div>
      </div>

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <Portfolio />
        </div>
      </div>

      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="list">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
           
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p> 
          </div>
          
        </div>
      </div> */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdinaHomeSidebar;