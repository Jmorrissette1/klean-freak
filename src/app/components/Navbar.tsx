"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className="m-2 cursor-pointer">
        <Image
          src="/logo.png"
          width={200}
          height={90}
          alt="Klean Freak logo"
          className={styles.logo}
        ></Image>
      </Link>

      <button
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      <ul
        className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ""}`}
      >
        <li>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)}>
            Packages
          </Link>
        </li>

        <li className={styles.dropdown}>
          <button onClick={() => handleDropdownToggle("kleanClub")}>
            Memeberships
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "kleanClub" ? styles.show : ""
            }`}
          >
            <li>
              <Link href="/klean-club" onClick={() => setMobileMenuOpen(false)}>
                Klean Club
              </Link>
            </li>
            <li>
              <Link
                href="/why-unlimited"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Unlimited?
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <button onClick={() => handleDropdownToggle("about")}>About</button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "about" ? styles.show : ""
            }`}
          >
            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <a
                href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/8491fa92-c48c-4541-8cb7-241a824bf93f/?q=&o=postedDateDesc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <button onClick={() => handleDropdownToggle("locations")}>
            Locations
          </button>
          <ul
            className={`${styles.dropdownMenu} ${
              openDropdown === "locations" ? styles.show : ""
            }`}
          >
            <li>
              <Link
                href="/locations/poulsbo"
                onClick={() => setMobileMenuOpen(false)}
              >
                Poulsbo
              </Link>
            </li>
            <li>
              <Link
                href="/locations/silverdale"
                onClick={() => setMobileMenuOpen(false)}
              >
                Silverdale
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)}>
            Events
          </Link>
        </li>
        <Link href="/memberships" onClick={() => setMobileMenuOpen(false)}>
          <button className={styles.navButton}>Manage Your Account</button>
        </Link>
      </ul>
    </nav>
  );
}
