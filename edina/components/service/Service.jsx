import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Tilt from 'react-parallax-tilt';
import servicesData from '../../data/services';
import Image from 'next/image';

Modal.setAppElement('#__next');

const Service = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  const handleBServicesData = (id) => {
    const find = servicesData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }, 500);
  };

  const handleModle = (id, event) => {
    if (event?.preventDefault) event.preventDefault();
    handleBServicesData(id);
  };

  const handleScrollKeys = (e) => {
    const wrap = scrollRef.current;
    if (!wrap) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      wrap.scrollBy({ top: 30, behavior: 'smooth' });
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      wrap.scrollBy({ top: -30, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      window.addEventListener('keydown', handleScrollKeys);
      if (scrollRef.current) {
        scrollRef.current.focus();
      }
    } else {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleScrollKeys);
    }
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleScrollKeys);
    };
  }, [isOpen]);

  return (
    <div className="service_list">
      <ul>
        {servicesData.map((item) => (
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            className="mb-2 sm:mb-4"
            key={item.id}
          >
            <Tilt>
              <div className="list_inner" onClick={() => handleModle(item?.id)}>
                <div className="hover">
                  <div className="service_title">
                    <h3 id={`heading-${item.id}`}>{item.title}</h3>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="learnMoreButton"
                      id={`learnMore-${item.id}`}
                      aria-labelledby={`heading-${item.id} learnMore-${item.id}`}
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        handleModle(item?.id);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          triggerRef.current = e.currentTarget;
                          handleModle(item?.id);
                        }
                      }}
                    >
                      Learn More <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Service details"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <div className="box_inner">
            <button className="close-modal" onClick={closeModal}>
              <Image
                width={45}
                height={45}
                src="/img/svg/cancel.svg"
                alt="close"
              />
            </button>

            <div className="description_wrap" ref={scrollRef} tabIndex={-1}>
              <div className="popup_informations">
                {singleData?.popupImg && (
                  <div className="image">
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${singleData.popupImg})`,
                      }}
                    ></div>
                  </div>
                )}
                <div className="description">
                  <h3>{singleData?.popupTitle}</h3>
                  {singleData?.firstDescriptionText}
                  {singleData?.serviceListDescriptions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Service;
