import React, { useEffect, useState } from "react";
import styles from "../../styles/mobileNav.module.css";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const navItems = [
  { name: "Projects", url: "" },
  { name: "Partners", url: "" },
  { name: "FAQ", url: "" },
  { name: "Masters", url: "" },
  { name: "Classes", url: "" },
  { name: "Course Expirience", url: "" },
  { name: "About us", url: "" },
];
export default function MobileNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // prevent scrolling while menu is opened
    if (isVisible) document.body.style.position = "fixed";
    else document.body.style.position = "static";
  }, [isVisible]);

  const renderLink = (name, url) => {
    return (
      <div className={styles.nav__linkContainer}>
        <a className={styles.nav__link} href={`#${url}`}>
          {name}
        </a>
      </div>
    );
  };

  const renderLinkBar = () => {
    return (
      <div className={styles.nav__linkContainer}>
        {navItems.map((item) => renderLink(item.name, item.url))}
      </div>
    );
  };

  const renderRegisterButton = () => {
    return <button className={styles.nav__registerButton}>Register</button>;
  };

  const renderNavOverlay = () => {
    if (isVisible) {
      return (
        <div className={styles.nav__overlay}>
          <div className={styles.nav__overlayContainer}>
            {renderLinkBar()}
            {renderRegisterButton()}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.blackWrapper}>
      {renderNavOverlay()}

      <nav className={styles.nav}>
        <MenuIcon setIsVisible={setIsVisible} isVisible={isVisible} />
        <div className={styles.nav__logoHolder}>
          <Logo />
        </div>
      </nav>
    </div>
  );
}
