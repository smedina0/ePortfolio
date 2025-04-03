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
            <h3>Academic Work</h3>
          </div>
          <p>
            While I enjoyed all of the courses in the Disability Studies
            program, here are a few of my favorites:
          </p>

          <Service />
        </div>
      </div>

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Program Reflection</h3>
          </div>
          <p className="largerText">
            My time in this Master&apos;s in Disability Studies program has been
            a profound exploration of disability as a complex experience. The
            program had a particularly curated selection of courses that has
            provided me with several perspectives that extend beyond traditional
            educational teachings. In courses like Psyhosocial, Cultural and
            Political Aspects of Disability (DSAB 601) and Dsiability Studies &
            the Humanities (DSAB 621), we challenged societal narratives and
            understood disability through intersectional and humanistic lenses.
            Alongside the scholarly and theoretical perspectives were courses
            related to the practical applciations of disabilities studies like
            Leadership in Disability Services Agencies (DSAB 624) and Disability
            Law & Policy (DSAB 626). The variety of the curriculum has prepared
            me to be an informed, empathetic advocate and professional in the
            disability studies field.
          </p>
          <br></br>
          <p className="largerText">
            I have been in the field of digital accessibility for over 6 years.
            In my time as an accessibility professional,I have learned the ins
            and outs of document accessibility (Microsoft Office/Adobe Suite),
            annotations in design accessibility, accessibility quality
            assurance/accessibility testing, and accessibility development. In
            my time in digital accessibility, I learned the &quot;trade&quot; of
            digital accessibility, but I realized that I was lacking in terms of
            the social, political, administrative, and legal aspects of
            disability. This lack of knowledge was disappointing to me.
            Reflecting on this program, I am very grateful for what I have
            learned and the knowledge, resources, and conversations this program
            has provided me with. I have taken what I learned in this course and
            have applied it to my work, my conversations, and my advocacy for
            people with disabilities. I am much more confident when talking
            about usability and when explaining the importance of what I do with
            people in related fields (designers/developers/testers/product
            owners/etc).
          </p>
          {/* <Portfolio /> */}
        </div>
      </div>

      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Unique Section</h3>
          </div>
          <p>
            For the unique portion of my e-portfolio, I have decided to dedicate
            this section to digital accessibility.
          </p>

          <div className="">
            <Testimonial />
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
          <div className="">
            <h3>Contact</h3>
            <p>
              I am passionate about making digital spaces work for everyone,
              drawing from my background in disability studies and hands-on tech
              experience. My goal is to break down digital barriers and create
              online experiences that are not just accessible, but actually
              provide great user experiences.
            </p>
          </div>
          <div className="extra_info">{/* <Address /> */}</div>
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  While I am not open to work, I am open to conversations and
                  networking regarding
                  <br />
                  <span>accessible design, development, and testing.</span>
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
              {/* <Map /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdinaHomeSidebar;
