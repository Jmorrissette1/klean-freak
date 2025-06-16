import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <div className={styles.footerContent}>
        <h1 className={styles.footerH1}>
          <em>FIND YOUR NEAREST KLEAN FREAK</em>
        </h1>
        <div className={styles.footerCardSection}>
          <div className={styles.footerLocationCard}>
            <h3 className={styles.footerH3}>Poulsbo</h3>
            <h4>Phone</h4>
            <p>360-616-3270</p>
            <h4>Address</h4>
            <p>21205 Olhava Way NW</p>
            <h4>Hours</h4>
            <p>Open 24 Hours!</p>
            <button className={styles.footerCardBtn}>Directions & More</button>
          </div>
          <div className={styles.footerLocationCard}>
            <h3>Silverdale</h3>
            <h4>Phone</h4>
            <p>360-360-616-3276</p>
            <h4>Address</h4>
            <p>9550 Ridgetop Blvd NW</p>
            <h4>Hours</h4>
            <p>Open 24 Hours!</p>
            <button className={styles.footerCardBtn}>Directions & More</button>
          </div>
        </div>
      </div>
      <div className="centeredRow">
        <Image src="/Facebook.png" alt="Facebook" width={75} height={75} />
        <Image src="/Instagram.png" alt="Facebook" width={75} height={75} />
      </div>
    </div>
  );
};

export default Footer;
