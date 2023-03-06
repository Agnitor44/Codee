import React from "react";
import styles from "../../styles/nav.module.css";
import Logo from "./Logo";

const navItems = [
  { name: "Projects", url: "#" },
  { name: "Partners", url: "#" },
  { name: "FAQ", url: "#" },
  { name: "Masters", url: "#" },
  { name: "Classes", url: "#" },
  { name: "Course Expirience", url: "#" },
  { name: "About us", url: "#" },
];
export default function Nav() {
  const renderLink = (name, url) => {
    return (
      <a className={styles.nav__link} href={`#${url}`}>
        {name}
      </a>
    );
  };

  const renderLinkBar = () => {
    return (
      <div className={styles.nav__linkContainer}>
        <div className={styles.nav__logoHolder}>
          <Logo />
        </div>
        {navItems.map((item) => renderLink(item.name, item.url))}
      </div>
    );
  };

  const renderRegisterButton = () => {
    return <button className={styles.nav__registerButton}>Register</button>;
  };

  return (
    <div className={styles.blackWrapper}>
      <nav className={styles.nav}>
        <div className={styles.nav__innerWrapper}>{renderLinkBar()}</div>
        {renderRegisterButton()}
      </nav>
    </div>
  );
}
