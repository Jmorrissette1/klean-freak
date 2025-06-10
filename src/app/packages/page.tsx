import Link from "next/link";
import styles from "./package.module.css";
const Packages = () => {
  return (
    <div className="centeredColumn">
      <h1 className="pageH1">
        <em>Wash Packages</em>
      </h1>
      <div className={styles.packageSection}>
        <div className={styles.packageCard}>
          <div className={styles.packageCardHeader}>
            <h1 className={styles.packageH1}>
              <em>ULTIMATE FREAK</em>
            </h1>
          </div>
          <div className={styles.packagePriceRow}>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $16<span className={styles.priceSpan}>ea.</span>
              </p>
              <p className={styles.priceType}>Single Wash</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $42<span className={styles.priceSpan}>/mo.</span>
              </p>
              <p className={styles.priceType}>Unlimited Wash</p>
            </div>
          </div>
        </div>
        <div className={styles.packageList}>
          <div className={styles.packageCol}>
            <p className={styles.packageH3}>Undercarriage Blast</p>
            <p className={styles.packageP}>
              Regular undercarriage cleaning helps remove dirt, salt, and grime
              that can lead to rust and corrosion, particularly in areas that
              are prone to moisture and road salt exposure during winter.
            </p>
            <p className={styles.packageH3}>Wheel Blast</p>
            <p className={styles.packageH3}>2 Hot Presoaks</p>
            <p className={styles.packageH3}>High Pressure Pass</p>
            <p className={styles.packageH3}> Forced Air Dry</p>
          </div>
          <div className={styles.packageCol}>
            <p className={styles.packageH3}>Clear Coat</p>
            <p className={styles.packageH3}>Protectant High Pressure Rinse</p>
            <p className={styles.packageH3}>Bug Pass</p>
            <p className={styles.packageH3}>KleanFoam</p>
            <p className={styles.packageH3}>KleanShield</p>
            <p className={styles.packageP}>
              {" "}
              A special polymer is applied to your paint that adds extra shine
              while deflecting rain and grime.
            </p>
            <Link href="/klean-club">
              <button className={styles.packageBtn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.packageSection}>
        <div className={styles.packageCard}>
          <div className={`${styles.packageCardHeader}  ${styles.superFreak}`}>
            <h1 className={styles.packageH1}>
              <em>SUPER FREAK</em>
            </h1>
          </div>
          <div className={styles.packagePriceRow}>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $13<span className={styles.priceSpan}>ea.</span>
              </p>
              <p className={styles.priceType}>Single Wash</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $32<span className={styles.priceSpan}>/mo.</span>
              </p>
              <p className={styles.priceType}>Unlimited Wash</p>
            </div>
          </div>
        </div>

        <div className={styles.packageList}>
          <div className={styles.packageCol}>
            <p className={styles.packageH3}>Undercarriage Blast</p>
            <p className={styles.packageP}>
              Regular undercarriage cleaning helps remove dirt, salt, and grime
              that can lead to rust and corrosion, particularly in areas that
              are prone to moisture and road salt exposure during winter.
            </p>
            <p className={styles.packageH3}>Wheel Blast</p>
            <p className={styles.packageH3}>2 Hot Presoaks</p>
            <p className={styles.packageH3}>High Pressure Pass</p>
            <p className={styles.packageH3}> Forced Air Dry</p>
          </div>
          <div className={styles.packageCol}>
            <p className={styles.packageH3}>Clear Coat</p>
            <p className={styles.packageH3}>High Pressure Rinse</p>
            <Link href="/klean-club">
              <button className={styles.packageBtn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.packageSection}>
        <div className={styles.packageCard}>
          <div className={`${styles.packageCardHeader}  ${styles.kleanFreak}`}>
            <h1 className={styles.packageH1}>
              <em>KLEAN FREAK</em>
            </h1>
          </div>
          <div className={styles.packagePriceRow}>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $10<span className={styles.priceSpan}>ea.</span>
              </p>
              <p className={styles.priceType}>Single Wash</p>
            </div>
            <div className={styles.verticalLine}></div>
            <div className={styles.packagePrice}>
              <p className={styles.price}>
                $23<span className={styles.priceSpan}>/mo.</span>
              </p>
              <p className={styles.priceType}>Unlimited Wash</p>
            </div>
          </div>
        </div>

        <div className={styles.packageList}>
          <div className={styles.packageCol}>
            <p className={styles.packageH3}>Undercarriage Blast</p>
            <p className={styles.packageP}>
              Regular undercarriage cleaning helps remove dirt, salt, and grime
              that can lead to rust and corrosion, particularly in areas that
              are prone to moisture and road salt exposure during winter.
            </p>
            <p className={styles.packageH3}>Wheel Blast</p>
            <p className={styles.packageH3}>2 Hot Presoaks</p>
            <p className={styles.packageH3}>High Pressure Pass</p>
          </div>
          <div className={styles.packageCol}>
            <Link href="/klean-club">
              <button className={styles.packageBtn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.becomeAMemberSection}>
        <div className={styles.becomeMemberBox1}>
          <div className={styles.becomeMemberH1}>
            SIGN UP FOR UNLIMITED <br />
            CAR WASHES
          </div>
          <div className={styles.becomeMemeberP}>
            Your new favorite membership! Join our Unlimited Wash Club and
            experience our Feel Good Klean for less!
          </div>
          <Link href="/klean-club">
            <button className={`${styles.memeberBtn} ${styles.memeberBtnA}`}>
              Sign Up
            </button>
          </Link>
        </div>
        <div className={styles.becomeMemberBox2}></div>
      </div>
    </div>
  );
};

export default Packages;
