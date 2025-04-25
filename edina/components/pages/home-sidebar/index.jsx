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
import Image from 'next/image';

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
      <main>
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
              <h2>Academic Work</h2>
            </div>

            <h3>Masters of Arts in Disability Studies</h3>
            <br />
            <h4>Mission</h4>
            <p>
              The mission of the Disability Studies Program is to develop
              leaders who will improve the lives of people with disabilities. In
              a welcoming and hospitable environment, students are taught to
              think about disability in a social, cultural and political
              context, and to conduct research, apply theory, and advocate for
              inclusion, access and opportunities for disabled people.
            </p>
            <br />
            <h4>Program Learning Outcomes</h4>
            <p>Graduates of the MA in Disability Studies will be able to:</p>
            <ul className="unstyledList">
              <li>
                Analyze disability experience, both individual and societal,
                using a multidisciplinary approach.
              </li>
              <li>
                Critique representations and expression of disability in the
                media, creative arts and culture.
              </li>
              <li>
                Apply critical thinking skills to examine issues related to
                disability policy and law.
              </li>
              <li>
                Demonstrate research skills for ongoing reading/research in
                disability studies
              </li>
              <li>
                Advocate for improved quality of life and social justice for
                people with disabilities
              </li>
            </ul>
            <br />
            <h4>The Program</h4>
            <p>
              The MA in Disability Studies, the first stand-alone program of its
              kind in the country, offers students a unique opportunity to
              examine disability from an interdisciplinary perspective,
              including the social sciences, humanities, science, social policy
              and the law. The program utilizes a ‘person centered’ approach to
              the study of disability, incorporating overlapping lenses through
              which students realize disability as a social construction as
              opposed to a deficit inherent in an individual.
              <br />
              <br />
              The degree provides students with the intellectual and
              methodological tools to assume greater responsibility and
              leadership in the future as service providers, advocates,
              researchers, or policy makers. Students study with renowned
              faculty from CUNY as well as expert practitioners from public and
              private organizations.
              <br />
              <br />
              Graduates of the Master&apos;s Degree in Disability Studies
              program are reflective, knowledgeable and flexible professionals,
              researchers, educators and advocates in their chosen
              disability-related field. Graduates think, write and speak
              critically about:
              <br />
              <ul className="unstyledList">
                <li>Disability experience, both individual and social;</li>
                <li>
                  Disability and the arts/creativity in disability culture;
                </li>
                <li>
                  Improvement in quality of life and justice for people with
                  disabilities;
                </li>
                <li>
                  Field based applications to disability-related practice;
                </li>
                <li>
                  Research for ongoing learning and writing in disability
                  studies.
                </li>
              </ul>
            </p>
            <br />
            <h5>Required Courses</h5>
            <ul className="unstyledList">
              <li>
                DSAB 601: Psychosocial, Cultural and Political Aspects of
                Disability
              </li>
              <li>DSAB 602: Embodiment and Disability</li>
              <li>DSAB 605: Disability and Diversity</li>
              <li>DSAB 611: Qualitative Research Methods</li>
              <li>DSAB 626: Disability Law and Policy</li>
              <li>DSAB 699: Capstone Course</li>
            </ul>
            <br />
            <h5>Disability Studies Elective Courses</h5>
            <ul className="unstyledList">
              <li>DSAB 603 - Disability and the Family Life Cycle</li>
              <li>DSAB 620 - Disability History</li>
              <li>DSAB 621 - Disability Studies and the Humanities</li>
              <li>DSAB 622 - Disability in Mass Media</li>
              <li>DSAB 623 - Disability Studies and the Health Professions</li>
              <li>DSAB 624 - Leadership in Disability Service Agencies</li>
              <li>DSAB 625 - Grantwriting for Disability Programs</li>
              <li>DSAB 627 - Disability and Narrative</li>
              <li>DSAB 628 - Disability Studies in Education</li>
              <li>DSAB 629 - Students with Disabilities in Higher Education</li>
              <li>
                DSAB 630 - Aging and Disability: Multiple Perspectives and
                Emerging Issues
              </li>
              <li>DSAB 649 - Independent Study</li>
              <li>DSAB 651 - Special Topics Course</li>
              <li>DSAB 655 - Reel to Real: Psychiatry at the Cinema</li>
            </ul>
            <Service />
          </div>
        </div>

        <div className="edina_tm_portfolio" id="portfolio">
          <div className="container">
            <div className="edina_tm_title">
              <h3>Program Reflection</h3>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  marginBottom: '20px',
                }}
              >
                <Image
                  src="/img/about/deepthought.jpg"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p>
              My time in this Master&apos;s in Disability Studies program has
              been a profound exploration of disability as a complex experience.
              The program had a particularly curated selection of courses that
              has provided me with several perspectives that extend beyond
              traditional educational teachings. In courses like Psyhosocial,
              Cultural and Political Aspects of Disability (DSAB 601) and
              Dsiability Studies & the Humanities (DSAB 621), we challenged
              societal narratives and understood disability through
              intersectional and humanistic lenses. Alongside the scholarly and
              theoretical perspectives were courses related to the practical
              applciations of disabilities studies like Leadership in Disability
              Services Agencies (DSAB 624) and Disability Law & Policy (DSAB
              626). The variety of the curriculum has prepared me to be an
              informed, empathetic advocate and professional in the disability
              studies field.
            </p>
            <br />
            <p>
              I have been in the field of digital accessibility for over 6
              years. In my time as an accessibility professional,I have learned
              the ins and outs of document accessibility (Microsoft Office/Adobe
              Suite), annotations in design accessibility, accessibility quality
              assurance/accessibility testing, and accessibility development. In
              my time in digital accessibility, I learned the &quot;trade&quot;
              of digital accessibility, but I realized that I was lacking in
              terms of the social, political, administrative, and legal aspects
              of disability. This lack of knowledge was disappointing to me.
              Reflecting on this program, I am very grateful for what I have
              learned and the knowledge, resources, and conversations this
              program has provided me with. I have taken what I learned in this
              course and have applied it to my work, my conversations, and my
              advocacy for people with disabilities. I am much more confident
              when talking about usability and when explaining the importance of
              what I do with people in related fields
              (designers/developers/testers/product owners/etc).
            </p>
          </div>
        </div>

        <div className="edina_tm_testimonials" id="testimonial">
          <div className="container">
            <div
              style={{
                marginBottom: '20px',
                zIndex: 2,
                position: 'relative',
                fontSize: '24px',
              }}
            >
              <h3>Unique Section – Digital Accessibility</h3>
            </div>

            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                marginBottom: '20px',
              }}
            >
              <Image
                src="/img/about/digitalaccessibility.jpg"
                alt="A person pressing a keyboard key that has the words Digital Accessibility written on it"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p>
              For the unique portion of my e-portfolio, I have decided to
              dedicate this section to digital accessibility. I would like to
              share a high level description of digital accessibility and the
              work that I do.
            </p>
            <br />

            <div>
              <Testimonial />
            </div>
          </div>
        </div>

        <div className="edina_tm_contact" id="contact">
          <div className="container">
            <div>
              <h3>Contact</h3>
              <p>
                I am passionate about making digital spaces work for everyone,
                drawing from my background in disability studies and hands-on
                tech experience. My goal is to break down digital barriers and
                create online experiences that are not just accessible, but
                actually provide great user experiences.
              </p>
            </div>
            <div className="extra_info"></div>
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
      </main>
    </div>
  );
};

export default EdinaHomeSidebar;
