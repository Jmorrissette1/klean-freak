"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Logo Here
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <NavItem href="/packages" label="Packages" />
          <Dropdown
            label="Memberships"
            items={[
              { label: "Klean Club", href: "/memberships" },
              { label: "Why Unlimited?", href: "/why-unlimited-page.html" },
            ]}
          />
          <Dropdown
            label="About"
            items={[
              { label: "About Us", href: "/about" },
              {
                label: "Careers",
                href: "https://recruiting2.ultipro.com/...",
                external: true,
              },
            ]}
          />
          <Dropdown
            label="Locations"
            items={[
              { label: "Poulsbo", href: "/Poulsbo-location.html" },
              { label: "Silverdale", href: "/Silverdale-location.html" },
            ]}
          />
          <li>
            <Link href="#" className="hover:text-blue-600">
              Events
            </Link>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Manage Membership
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-3">
          <NavItem href="/packages" label="Packages" mobile />
          <Dropdown
            label="Memberships"
            items={[
              { label: "Klean Club", href: "/memberships" },
              { label: "Why Unlimited?", href: "/why-unlimited-page.html" },
            ]}
            mobile
          />
          <Dropdown
            label="About"
            items={[
              { label: "About Us", href: "/about" },
              {
                label: "Careers",
                href: "https://recruiting2.ultipro.com/...",
                external: true,
              },
            ]}
            mobile
          />
          <Dropdown
            label="Locations"
            items={[
              { label: "Poulsbo", href: "/Poulsbo-location.html" },
              { label: "Silverdale", href: "/Silverdale-location.html" },
            ]}
            mobile
          />
          <NavItem href="#" label="Events" mobile />
          <li>
            <button className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
              Manage Membership
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

function NavItem({ href, label, mobile = false }) {
  const base = "text-gray-700 hover:text-blue-600";
  const spacing = mobile ? "block px-2 py-1" : "";
  return (
    <li>
      <Link href={href} className={`${base} ${spacing}`}>
        {label}
      </Link>
    </li>
  );
}

function Dropdown({ label, items, mobile = false }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
    return (
      <li>
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left text-gray-700 hover:text-blue-600 px-2 py-1"
        >
          {label}
        </button>
        {open && (
          <ul className="pl-4 space-y-1">
            {items.map((item, idx) =>
              item.external ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  href={item.href}
                  className="block text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )
            )}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="relative group">
      <button className="text-gray-700 hover:text-blue-600">{label}</button>
      <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-200 z-50">
        {items.map((item, idx) =>
          item.external ? (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={idx}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          )
        )}
      </ul>
    </li>
  );
}
