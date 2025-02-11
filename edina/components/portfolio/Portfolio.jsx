import { useState } from 'react';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
import Social from '../Social';
import portfolioData from '../../data/portfolio';
import Image from 'next/image';

Modal.setAppElement('#__next');

const Portfolio = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };

  return (
    <div className="portfolio_inner gallery_zoom">
      <ul
        className="portfolio-grid"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {portfolioData.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="image">
                <div onClick={() => handleModle(item?.id)} className="details">
                  <Image
                    width={357}
                    height={357}
                    src={item.portfolioImage}
                    data-tip
                    data-for={item.tooltipId}
                    alt="portfolio"
                  />

                  <ReactTooltip
                    id={item.tooltipId}
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>{item.title}</h5>
                      <span>{item.meta}</span>
                    </div>
                  </ReactTooltip>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Rest of the component remains the same */}
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        {/* Modal content remains unchanged */}
      </Modal>
    </div>
  );
};

export default Portfolio;
