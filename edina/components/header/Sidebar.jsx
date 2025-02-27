import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import sidebarContent from '../../data/sidebar';
import Image from 'next/image';
import logo from '../../public/img/logo/dark.png';
import logo2 from '../../public/img/logo/light.png';

// sidebar footer bottom content
const sidebarFooterContent = {
  name: 'Steven Medina',
  email: 'steven.medina93@sps.cuny.edu',
  emailRef: 'mailto:steven.medina93@sps.cuny.edu',
};

// Adjust this offset value to control how far from the top the section should be positioned
const OFFSET = 0;

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Refs for focus management
  const toggleButtonRef = useRef(null);
  const sidebarRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  // Memoize handleClose to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    if (isMobile) {
      setIsOpen(false);
      toggleButtonRef.current?.focus();
    }
  }, [isMobile]);

  // Handle smooth scrolling with offset
  const handleLinkClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      const section = document.getElementById(sectionId);
      if (section) {
        // Get the section's position relative to the top of the page
        const sectionTop =
          section.getBoundingClientRect().top + window.pageYOffset;

        // Scroll to the section with the offset
        window.scrollTo({
          top: sectionTop - OFFSET,
          behavior: 'smooth',
        });

        // Update active section
        setActiveSection(sectionId);

        // Close sidebar on mobile
        if (isMobile) {
          handleClose();
        }
      }
    },
    [isMobile, handleClose]
  );

  useEffect(() => {
    // Check viewport width and set mobile state
    const checkMobile = () => {
      const mobileWidth = window.innerWidth <= 1199;
      setIsMobile(mobileWidth);

      // Reset open state based on viewport
      setIsOpen(!mobileWidth);
    };

    // Check initial viewport
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Function to handle scroll and update active section
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'service',
        'portfolio',
        'testimonial',
        'blog',
        'contact',
      ];

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Use the same OFFSET value here for consistency
          if (rect.top <= OFFSET && rect.bottom >= OFFSET) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listeners
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle keyboard events for focus trapping
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle when sidebar is open in mobile
      if (!isMobile || !isOpen) return;

      // Trap focus within sidebar when open
      if (e.key === 'Tab') {
        // Shift + Tab from toggle button
        if (e.shiftKey && document.activeElement === toggleButtonRef.current) {
          e.preventDefault();
          lastLinkRef.current?.focus();
        }
        // Tab from last link
        else if (
          !e.shiftKey &&
          document.activeElement === lastLinkRef.current
        ) {
          e.preventDefault();
          toggleButtonRef.current?.focus();
        }
      }

      // Close sidebar on Escape key
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, isOpen, handleClose]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <div className="mob-header">
          <button
            ref={toggleButtonRef}
            className="toggler-menu"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls="sidebar-menu"
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
          >
            <div className={isOpen ? 'active' : ''}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      )}
      {/* End Mobile Header */}

      {(isMobile ? isOpen : true) && (
        <div
          ref={sidebarRef}
          className={`edina_tm_sidebar 
            ${isMobile && isOpen ? 'menu-open mobile' : ''} 
            ${!isMobile ? 'desktop' : ''}`}
          role="dialog"
          aria-modal={isMobile}
          aria-label="Navigation Menu"
        >
          <div className="sidebar_inner">
            <div className="logo">
              <Link
                href="/home-sidebar#home"
                onClick={(e) => handleLinkClick(e, 'home')}
              >
                <Image
                  width={200}
                  height={100}
                  className="logo_light"
                  src={logo}
                  alt="brand"
                />
              </Link>
            </div>
            {/* End .logo */}

            {(isMobile ? isOpen : true) && (
              <div className="menu">
                <ul className="anchor_nav">
                  {sidebarContent.map((val, i) => (
                    <li key={i}>
                      <div className="list_inner">
                        <Link
                          ref={
                            i === 0
                              ? firstLinkRef
                              : i === sidebarContent.length - 1
                              ? lastLinkRef
                              : null
                          }
                          href={val.itemRoute}
                          className={
                            activeSection === val.itemRoute.replace('#', '')
                              ? 'active'
                              : val.activeClass
                          }
                          onClick={(e) =>
                            handleLinkClick(e, val.itemRoute.replace('#', ''))
                          }
                        >
                          <Image
                            width={18}
                            height={18}
                            className="svg custom"
                            src={`img/svg/${val.icon}.svg`}
                            alt="icon"
                          />
                          {val.itemName}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* End .menu */}

            {/* <div className="author">
              <div className="inner">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: 'url(img/about/avatar.jpg)',
                    }}
                  ></div>
                </div>
                {/* <div className="short">
                  <h3>{sidebarFooterContent.name}</h3>
                  <a href={sidebarFooterContent.emailRef}>
                    {sidebarFooterContent.email}
                  </a>
                </div> 
              </div>
            </div>*/}
          </div>
        </div>
      )}

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="menu-overlay"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
