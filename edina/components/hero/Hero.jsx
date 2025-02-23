import React from 'react';
import Social from '../Social';
import Image from 'next/image';
import shapeImage from '../../public/img/hero/1.jpg';
import heroImage from '../../public/img/hero/sm.jpg';

const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: 'Steven Medina',
  description: 'Accessibility Specialist',
};

const Hero = () => {
  return (
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape">
          <Image src={heroContent.heroImage} alt="brand" />
        </div>
        <div className="extra">
          <h1 class="accessible-text">
            Steven Medina - Accessibility Specialist at CUNY SPS
          </h1>
          <p className="hello">Hello, I am {heroContent.name}</p>
          <p className="name">
            <span className="typer-toper">{heroContent.description}</span>
          </p>
          <p>Master's Candidate in Disability Studies | Advocating for Digital Accessibility</p>
          <div className="social">
            <Social />
          </div>
          <div className="edina_tm_button">
            <a href="/img/sample.pdf" download className="color">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
