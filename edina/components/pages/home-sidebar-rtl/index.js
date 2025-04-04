import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Sidebar from "../../header/Sidebar";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const EdinaHomeRtl = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.add("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}>
      {/* Dark & Light Mode Switcher */}
      <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
        <input type="checkbox" onClick={handleLabelClick} className="theme-switcher" />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>

      {/* Header */}
      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>

      <Sidebar />
      <Hero />
      <About />

      {/* Services */}
      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
          </div>
          <Service />
        </div>
      </div>

      {/* Portfolio */}
      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
          </div>
          <Portfolio />
        </div>
      </div>

      {/* Testimonials */}
      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
          </div>
          <div className="list">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
          </div>
          <Blog />
        </div>
      </div>

      {/* Contact */}
      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          <div className="mainpart">
            <div className="left" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
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
            <div className="right" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdinaHomeRtl;
