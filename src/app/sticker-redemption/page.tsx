'use client';

import styles from './stickerpage.module.css'


const StickerRedemption = () => {
  return <div className="centeredColumn"> <div className="contentBox"><h1 className="pageH1">2025 Sticker Collection</h1>
        <div className="stickerCollectionBox">
        <p className={styles.stickerP1}>Step 1: Scan QR code</p>
        <p className={styles.stickerP2}>Congratulations, you are here! Continue reading to learn more about the Sticker Collection and how to get started redeeming your stickers!
        </p>
        <p className={styles.stickerP1}>Step 2: Fill out form</p>
        <p className={styles.stickerP2}>Each time you receive a Klean Freak sticker, your next step will be to redeem your sticker by filling out the form below. Be sure to include all required fields to complete the form.
        </p>
        <p className={styles.stickerP1}>Step 3: Save Email
        </p>
        <p className={styles.stickerP2}>Once you have completed the form, you have been registered as collecting a sticker. You will be emailed a confirmation email of completion, save this email as proof of redemption.
        </p>
        <p className={styles.stickerP1}>Step 4: Special Offer</p>
        <p className={styles.stickerP2}>Between November 1st and November 30th, Klean Freak will have your special offer available to redeem at either location. If you did not fill out the form during the course of the promotion, please bring in all 6 sticker backs to your location to claim your special offer.
        </p>
        <iframe title="JotForm" src="https://form.jotform.com/251314570824150" width="100%" height="800px" frameBorder="0" scrolling="no" className="jotform-iframe"></iframe>
       

      </div>
      </div>
      </div>;
};


export default StickerRedemption;
