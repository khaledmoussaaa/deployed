import { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';
import styles from '../app/styles/page.module.css'

const images = [
  { id: 1, src: '/Images/Covers/CardTap.png', alt: 'CardTap' },
  { id: 2, src: '/Images/Covers/Sout.png', alt: 'Sout' },
  { id: 3, src: '/Images/Covers/Euromed Branding.png', alt: 'Euromed Branding' },
  { id: 4, src: '/Images/Covers/Architect Solutions.png', alt: 'Architect Solutions' },

];

function Boxs() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentState) => (currentState === images.length - 1 ? 0 : currentState + 1));
  };

  const previousImage = () => {
    setCurrentImage((currentState) => (currentState === 0 ? images.length - 1 : currentState - 1));
  };

  return <>
    <div id="boxs-component" className={styles.boxsCont}>
      <div className={styles.leftDiv}>
        <h5>Our Portfolio</h5>
        <div className={styles.buttons}>
          <button className={styles.back} onClick={previousImage}><Image
            src="/Images/Icons/Left Arrow.svg"
            alt=""
            width={60}
            height={60}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "50px"
            }} /></button>
          <button className={styles.go} onClick={nextImage}><Image
            src="/Images/Icons/Right Arrow.svg"
            alt=""
            width={60}
            height={60}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "50px"
            }} /> </button>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.head}>
          <Image
            src="/Images/Text/Header 2.svg"
            alt=""
            width={800}
            height={500}
            sizes="100vw"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "90%"
            }} />
        </div>
        <div className={styles.boxs}>
          {images.slice(currentImage, currentImage + 3).map((image) => (
            <ul key={image.id}>
              <li key={image.id}>
                <Link href={`/Projects?id=${image.id}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className={styles.box}
                    layout='responsive'
                    width={200}
                    height={200}
                    />
                  <h2>{image.alt}</h2>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
    <div className={styles.imageHidde}>
      <Image
        src="Images/Text/Header 2.svg"
        alt=""
        width={800}
        height={500}
        sizes="100vw"
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto"
        }} />
    </div>
    <div className={styles.boxsHidden}>
      <button onClick={previousImage}><Image
        src="/Images/Icons/Left Arrow.svg"
        alt=""
        width={60}
        height={60}
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto"
        }} /> </button>
      {images.slice(currentImage, currentImage + 1).map((image) => (
        <li key={image.id}>
          <Link href={`/Projects?id=${image.id}`}>
            <Image
              src={image.src}
              alt={image.alt}
              className={styles.box}
              width={800}
              height={500}
              sizes="100vw"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "auto"
              }} />
            <h2>{image.alt}</h2>
          </Link>
        </li>
      ))}
      <button onClick={nextImage}><Image
        src="/Images/Icons/Right Arrow.svg"
        alt=''
        width={800}
        height={500}
        sizes="100vw"
        style={{
          maxWidth: "100%",
          height: "auto",
          width: "auto"
        }} /></button>
    </div>

    <hr />
  </>;
}

export default Boxs;