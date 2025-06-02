import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <div className={styles.footerContent}>
        <h1 className={styles.footerH1}>
          <em>FIND YOUR NEAREST KLEAN FREAK</em>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
