"use client"
import Navbar from './Navbar';
import Footer from './Footer';
import Image from "next/image"
import Loading from './LoadingScreen';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import styles from '../app/styles/page.module.css'
import '../app/styles/globals.css'
const images = [
    { id: 1, src: '/Images/Projects/CardTap.svg', alt: 'CardTap' },
    { id: 2, src: '/Images/Projects/Sout.svg', alt: 'Sout' },
    { id: 3, src: '/Images/Projects/Euromed Branding.svg', alt: 'Euromed Branding' },
    { id: 4, src: '/Images/Projects/Architect Solutions.svg', alt: 'Architect Solutions' },
];

const ImagePage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.toggle('active');
            setIsActive(!isActive);
            console.log('Done');
        }
    };
    const close = () => {
        if (containerRef.current) {
            setIsActive(isActive);
        }
    };
    const router = useRouter();
    const { id } = router.query;

    const image = images.find((img) => img.id === Number(id));

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    if (!image) {
        return (
            <>
            <Navbar isActive={isActive} handleClick={handleClick} text={'Home'} text2={"Contact"} text3={""} />
            <div className={styles.loading}>
                Something wont wrong
            </div>
            </>
        )
    }

    return <>
        <Navbar isActive={isActive}  handleClick={handleClick} text={'Home'} text2={"Contact"} text3={""}/>
        {isLoading && <Loading />}
        <div ref={containerRef} className={`${styles.container} ${isActive ? styles.active : ''}`} onLoad={handleLoad} onError={handleError}>
            <div className={styles.projects}>
                <h1>{image.alt}</h1>
                <br />
                <Image
                    src={image.src}
                    alt={image.alt}
                    id='showProject'
                    width={800}
                    height={500}
                    sizes="100vw"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto"
                    }} />
            </div>
            <Footer />
        </div>
    </>;
};

export default ImagePage;