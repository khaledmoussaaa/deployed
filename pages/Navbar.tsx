import { useRef, useState } from 'react';
import styles from '../app/styles/page.module.css';
import Link from 'next/link';
import Image from "next/image"

interface NavbarProps {
  isActive: boolean;
  handleClick: () => void;
  text: string;
  text2: string;
  text3: string;
}

function Navbar({ isActive, handleClick, text, text2, text3 }: NavbarProps) {
  const navBar = useRef<HTMLUListElement>(null);
  const [toggleChecked, setToggleChecked] = useState(false); // New state variable

  const navigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const { top } = section.getBoundingClientRect();
      window.scrollTo({ top: window.pageYOffset + top, behavior: 'smooth' });
    }
  };

  const handleLiClick = () => {
    setToggleChecked(false); // Reset the toggle to unchecked state
    handleClick();
  };

  return (
    <>
      <div className={`${styles.navbar} ${isActive ? styles.nav : ''}`}>
        <Link href={'/'}>
          <Image
            src="/Images/Logos/Limstce Logo.svg"
            alt=""
            width={500}
            height={500}
            sizes="100vw"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
        </Link>
        <ul ref={navBar} className={`${styles.ul} ${isActive ? styles.show : ''}`}>
          <li onClick={handleLiClick}>{text === 'Home' ? (
            <Link href="/">
              <span>Home</span>
            </Link>
          ) : (
            <span onClick={() => navigate('about-component')}>{text}</span>
          )}</li>
          <li onClick={handleLiClick}>{text2 === 'Our Service' ? (
            <span onClick={() => navigate('boxs-component')}>{text2}</span>
          ) : (
            <span onClick={() => navigate('footer-component')}>{text2}</span>
          )}</li>
          <li onClick={handleLiClick}><span onClick={() => navigate('footer-component')}>{text3}</span></li>
        </ul>
        <div className={`${styles.toggleShow}`}>
          <input type="checkbox" id="checkbox" checked={toggleChecked} onChange={() => setToggleChecked(!toggleChecked)} />
          <label htmlFor="checkbox" className='toggle' onClick={handleClick}>
            <div className='bars' id="bar1"></div>
            <div className='bars' id="bar2"></div>
            <div className='bars' id="bar3"></div>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;