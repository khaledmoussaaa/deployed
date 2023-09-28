import React from 'react';
import styles from '../app/styles/LoadingScreen.module.css';
import Image from "next/image"
import Navbar from './Navbar';

function Loading() {
    return (
        <>
            <div className={styles.loading}>
                <Image
                    src="/Images/Animation/Loading.gif"
                    alt=""
                    width={200}
                    height={200}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "auto"
                    }} />
            </div></>
    );
}
export default Loading;