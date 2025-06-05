import { Tag, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import styles from "./MobileDock.module.css";

export function MobileDock() {
  return (
    <div className={styles.mobileDock}>
      <Link href="/packages">
        <button className={styles.mobileDockButton}>
          <Tag />
          <span>Packages</span>
        </button>
      </Link>

      <Link href="/klean-club" className={styles.centerButton}>
        <button className={styles.buyWashButton}>
          <ShoppingCart />
          <span>Buy</span>
          <span>Wash</span>
        </button>
      </Link>

      <Link href="/promotions">
        <button>
          <Star />
          <span>Promos</span>
        </button>
      </Link>
    </div>
  );
}
