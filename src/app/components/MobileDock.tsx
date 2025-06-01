import { Home, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import styles from "./MobileDock.module.css";

export function MobileDock() {
  return (
    <div className={styles.mobileDock}>
      <Link href="/packages.html">
        <Home />
        <span>Packages</span>
      </Link>

      <Link href="/buy-wash.html" className={styles.centerButton}>
        <ShoppingCart />
      </Link>

      <Link href="/promotions.html">
        <Star />
        <span>Promos</span>
      </Link>
    </div>
  );
}
