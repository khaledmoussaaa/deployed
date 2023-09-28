import styles from '../app/styles/page.module.css';
import Image from "next/image";

function Logos() {
  return (
    <div className={styles.logos}>
      <h1>Our Clients</h1>
      <div className={styles.scrollText}>
        <div className={styles.leftDir}>
          <Image
            src="/Images/Logos/Viber.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Lorel.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Vichy.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Ikea.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Cinnabon.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
        </div>
        <div className={styles.rightDir}>
          <Image
            src="/Images/Logos/Sushi Circle.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Orange.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/NovaNordic.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/AstraZeneca.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
          <Image
            src="/Images/Logos/Mbc.svg"
            alt=""
            width={250}
            height={250}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Logos;