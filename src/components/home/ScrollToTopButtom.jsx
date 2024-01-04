import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <button onClick={scrollToTop} className={`p-3 rounded bg-blue-500 text-white fixed right-5 bottom-20 md:right-10 md:bottom-10 z-50 translate-y-5 opacity-0 duration-300 md:p-[18px] ${isVisible && "translate-y-0 opacity-100"}`}>
          <FaArrowUp />
        </button>
    </div>
  );
};

export default ScrollToTopButton;
