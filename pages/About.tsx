import Image from "next/image"
import styles from '../app/styles/page.module.css'

function About() {
    return (
        <div className={styles.boxsCont2}>
            <div className={styles.rightDiv}>
                <div className={styles.background2}>
                    <h5>Our Service</h5>
                    <div className={styles.head}>
                        <Image
                            src="/Images/Text/Header 3.svg"
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
                </div>
                <div className={styles.boxsContent}>
                    <div className={styles.boxCon}>
                        <span>
                            Logo, Brand
                            Guidelines, Stationary
                        </span>
                        <h2>BRANDING</h2>
                    </div>
                    <hr />
                    <div className={styles.boxCon}>
                        <span>
                            Website, Mobile
                            and Dashboard Design
                        </span>
                        <h2>UI/UX</h2>
                    </div>
                    <hr />
                    <div className={styles.boxCon}>
                        <span>
                            Web Development,
                            Mobile app Development
                            and Testing
                        </span>
                        <h2>DEVELOPMENT</h2>
                    </div>
                    <hr />
                    <div className={styles.boxCon}>
                        <span>
                            Social media Marketing,
                            Media Buying and
                            Management
                        </span>
                        <h2>DIGITAL MARKETING</h2>
                    </div>
                    <hr />
                    <div className={styles.boxCon}>
                        <span>
                            Sound Engineering, Mixing
                            & Mastering, Music Production
                            and Voiceover
                        </span>
                        <h2>AUDIO SERVICES</h2>
                    </div>
                    <hr />
                </div>
            </div>
            <div className={styles.background3}>
                <Image
                    src="/Images/Backgrounds/Background 2.svg"
                    alt=""
                    width={800}
                    height={500}
                    sizes="100vw"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: "100%"
                    }} />
            </div>
        </div>
    );
}

export default About;