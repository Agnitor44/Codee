import { expirienceTabs } from "@/constants/expirienceTabs";
import React, { useState } from "react";
import styles from "../../styles/expirience.module.css";
import Tabs from "./tabs/Tabs";

export default function Expirience() {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderTitle = () => {
    return (
      <div className={styles.expirience__titleContainer}>
        <p className={styles.expirience__textOverlay}>Expirience</p>

        <h2>Course Experience</h2>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className={styles.expirience__content}>
        <img src="images/expirience.png" />
        <article className={styles.expirience__text}>
          {expirienceTabs[selectedTab]}
        </article>
      </div>
    );
  };

  return (
    <section className={styles.expirience}>
      {renderTitle()}
      <Tabs
        tabs={[
          "After attending the course",
          "During the period",
          "Before attending the course",
        ]}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      {renderContent()}
    </section>
  );
}
