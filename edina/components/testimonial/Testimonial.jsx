import React from 'react';
import testimonialContent from '../../data/testimonial';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <div className="testimonial-grid">
      {testimonialContent.map((val, i) => (
        <div
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(img/testimonials/${val.img}.jpg)`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h4>{val.name}</h4>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              {/* <div className="icon">
                <Image
                  width={60}
                  height={60}
                  className="svg"
                  src="/img/svg/quote.svg"
                  alt="quote"
                />
              </div> */}
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </div>
      ))}
    </div>
  );
}
