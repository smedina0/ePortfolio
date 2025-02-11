import React, { useEffect } from 'react';

const previewDemo = [
  {
    id: 1,
    img: '1',
    title: 'Home Horizontal',
    routerPath: '/home-horizontal',
    delayAnimation: '',
  },
  {
    id: 2,
    img: '3',
    title: 'Home Sidebar',
    routerPath: '/home-sidebar',
    delayAnimation: '50',
  },
  {
    id: 3,
    img: '2',
    title: 'Home Horizontal (RTL)',
    routerPath: '/home-horizontal_rtl',
    delayAnimation: '',
  },
  {
    id: 4,
    img: '4',
    title: 'Home Sidebar (RTL)',
    routerPath: '/home-sidebar-rtl',
    delayAnimation: '50',
  },
];

const EdinaPreview = () => {
  useEffect(() => {
    document.querySelector('body').classList.remove('theme-dark');
  }, []);

  return (
    <div
      className="edina_tm_intro bg-image"
      style={{
        backgroundImage: `url(/img/1.jpg)`,
      }}
    >
      <span className="preview-sticker pos-sticker react-sticker">
        <h6>NextJS</h6>
        <img className="logo" src="/img/intro/react.png" alt="react nextjs" />
      </span>

      <div className="mainpart" id="demos">
        <div className="container">
          <div className="main_title">
            <img src="/img/intro/logo.png" alt="brand" />
            <p>Personal Portfolio React NextJS Template + RTL</p>
          </div>

          <div className="demo_list">
            <ul className="preview-grid">
              {previewDemo.map((val) => (
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={val.delayAnimation}
                  key={val.id}
                >
                  <div className="list_inner">
                    <img src={`/img/intro/${val.img}.jpg`} alt="demo" />
                    <h3>{val.title}</h3>
                    <a
                      className="edina_tm_full_link"
                      href={val.routerPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">View {val.title}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="go_purchase">
        <h6 data-aos="fade-up" data-aos-duration="1200">
          You are at the right step now
        </h6>
        <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          Purchase Edina and Build Your Super Fast{' '}
          <span className="theme-color">React Next JS</span> Portfolio Template.
        </h3>
        <div
          className="edina_tm_button intro"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <a
            href="https://themeforest.net/user/elite-themes24/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Purchase Now
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Edina by{' '}
          <a
            href="https://themeforest.net/user/elite-themes24/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            elite-themes24
          </a>{' '}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default EdinaPreview;
