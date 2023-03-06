import React from "react";
import styles from "../../../styles/tabs.module.css";

export default function Tabs(props) {
  const { tabs, setSelectedTab, selectedTab } = props;

  const renderTab = (string, id) => {
    const active = selectedTab === id;
    return (
      <button
        className={active ? styles.tab__active : styles.tab}
        onClick={() => setSelectedTab(id)}
      >
        {string}
      </button>
    );
  };

  return (
    <div className={styles.container}>
      {tabs.map((item, index) => renderTab(item, index))}
    </div>
  );
}
