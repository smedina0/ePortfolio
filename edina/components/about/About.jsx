import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import ModalContent from './modal/ModalContent';
import Image from 'next/image';

Modal.setAppElement('#__next');

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      // Delay focus slightly to ensure DOM is rendered
      setTimeout(() => {
        scrollRef.current?.focus();
      }, 50);
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  const handleScrollKeys = (e) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      scrollEl.scrollBy({ top: 50, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      scrollEl.scrollBy({ top: -50, behavior: 'smooth' });
    }
  };

  return (
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h2>About Me</h2>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I&apos;m <span>Steven Medina!</span>
              </h3>
              <p>
                I am an accessibility designer/developer with Dysgraphia from
                Harlem, NY. I currently live in NJ, where I moved after
                graduating from college. I studied neuroscience and theatre as
                an undergrad at Middlebury College. After that, I purused my
                Master&apos;s Degree from NYU in Integrated Digital Media - with
                a thesis on video game accessibility!
              </p>
              <br />
              <p>
                While at NYU, I worked part-time for the NYU Moses Center for
                Students with Disabilities where I made PDFs accessible and
                learned about the Web Content Accessibility Guidelines (WCAG). I
                also worked part time at the City University of New York (CUNY)
                Central Office. Eventually I switched over from the Moses Center
                for Students with Disabilities to NYU IT where I worked on
                ensuring designs were accessible before moving to production.
              </p>
              <br />
              <p>
                After graduating, I worked full time at CUNY for a few years
                before eventually moving into the corporate world as an
                accessibility QA Engineer at JPMorgan Chase. After 3 years, I
                now find myself at Wells Fargo as an accessibility designer and
                pursing my Master&apos;s in Disability studies from CUNY SPS.
              </p>
            </div>
            <div className="my_skills" style={{ marginTop: '10px' }}>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
              </div>
            </div>
          </div>

          <div className="rightpart">
            <div className="image-container">
              <div className="image">
                <Image
                  src="/img/thumbs/profpic.jpg"
                  alt=""
                  width={445}
                  height={599}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="About Me Modal"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button
            className="close-modal"
            onClick={toggleModalOne}
            onKeyDown={handleScrollKeys}
          >
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>

          <div className="box_inner">
            <div
              className="description_wrap scrollable"
              ref={scrollRef}
              tabIndex={-1}
              onKeyDown={handleScrollKeys}
            >
              <ModalContent />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
