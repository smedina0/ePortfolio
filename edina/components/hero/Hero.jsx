import React from 'react';
import Social from '../Social';
import Image from 'next/image';
import shapeImage from '../../public/img/hero/1.jpg';
import heroImage from '../../public/img/hero/2.jpg';

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
          <h5 className="hello">Hello, I am {heroContent.name}</h5>
          <h1 className="name">
            <span className="typer-toper">{heroContent.description}</span>
          </h1>
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
