'use client';
import styles from '../app/styles/page.module.css'
import Image from "next/image"

function NavContent() {
  const handleClick = () => {
    const secondComponent = document.getElementById('boxs-component');
    if (secondComponent) {
      const { top } = secondComponent.getBoundingClientRect();
      window.scrollTo({ top: window.pageYOffset + top, behavior: 'smooth' });
    }
  };

  return <>
    <div className={styles.NavContent}>
      <div>
        <Image
          id='text'
          src="/Images/Text/Header 1.svg"
          alt=""
          width={800}
          height={500}
          sizes="100vw"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "auto"
          }} />
        <div className={styles.content}>
          <p>
            Limstce provides a wide range of services in multiple fields that are essential for any bussines growth
          </p>
          <button onClick={handleClick} className={styles.arrow}><Image
            src="/Images/Icons/Down Arrow.svg"
            alt=""
            width={60}
            height={60}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }} /> </button>
        </div>
      </div>
    </div>
    <Image
      src="Images/Backgrounds/Background 1.svg"
      alt=""
      width={800}
      height={500}
      sizes="100vw"
      style={{
        maxWidth: "100%",
        height: "auto",
        width: "auto"
      }} />
    <div id='about-component' className={styles.paragraph}>
      <p>
        With more than 10 years of experience in marketing and business solutions
        feilds, finally our innovative/creative team gathered under one umbrella to
        bring you extraordinary solutions with reasonable pricing.
      </p>
      <p>
        During our journey weVe dealt with various mega corporates and individuals as
        well, with 950/0+ client satisfaction rate and 920/0+ client retention rate assuring
        our effective client relationship management and flexibility.</p>
      <p>
        You&rsquo;re few steps away from transforming your ideas into stunning reality .
        just let&rsquo;s connect!
      </p>
    </div>
    <hr />
  </>;
}

export default NavContent;