"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/instructions", label: "Instructions", icon: "📋" },
    { href: "/resources", label: "Resources", icon: "📚" },
    { href: "/team-2024-2025", label: "2024-2025 Team", icon: "🏆" },
  ];

  return (
    <aside className={styles.sidebar}>
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
  );
}
