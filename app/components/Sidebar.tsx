"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/berkeley-invitational", label: "Berkeley Invitational", icon: "🏛️" },
    { href: "/instructions", label: "Instructions", icon: "📋" },
    { href: "/resources", label: "Resources", icon: "📚" },
    { href: "/team-2025-2026", label: "2025-2026 Team", icon: "🎯" },
    { href: "/team-2024-2025", label: "2024-2025 Team", icon: "🏆" },
    { href: "/team-2023-2024", label: "2023-2024 Team", icon: "⭐" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <h1 className={styles.mobileTitle}>Hyde SciOly Team</h1>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>Hyde</h1>
          <p className={styles.subtitle}>Science Olympiad</p>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${
                pathname === item.href ? styles.active : ""
              }`}
              onClick={handleLinkClick}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.footer}>
          <a href="mailto:hsoteams@gmail.com" className={styles.contact}>
            📧 hsoteams@gmail.com
          </a>
        </div>
      </aside>
    </>
  );
}
