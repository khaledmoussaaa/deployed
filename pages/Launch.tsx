"use client"
import Navbar from './Navbar';
import About from './About';
import Boxs from './Boxs';
import Footer from './Footer';
import Logos from './Logos';
import NavContent from './NavContent';
import LoadingScreen from './LoadingScreen';
import { useEffect, useRef, useState } from 'react';
import styles from '../app/styles/page.module.css';

function Launch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const Nav = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.toggle('active');
      Nav.current?.classList.toggle('nav');
      setIsActive(!isActive);
      console.log('true');
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if the global CSS is loaded by checking if the document styleSheets property is populated
    if (document.styleSheets.length > 0) {
      setIsLoading(false);
    } else {
      // Add event listener to detect when the global CSS is loaded
      window.addEventListener('load', handleLoad);
    }

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar isActive={isActive} handleClick={handleClick} text={'About Us'} text2={'Our Service'} text3={'Contact'} />
      <div ref={containerRef} className={`${styles.container} ${isActive ? styles.active : ''}`}>
        <NavContent />
        <Boxs />
        <About />
        <Logos />
        <Footer />
      </div>
    </>
  );
}

export default Launch;