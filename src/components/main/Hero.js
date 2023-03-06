import React from "react";
import styles from "../../styles/hero.module.css";

export default function Hero() {
  const renderInfo = () => {
    return (
      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__titles}>
          <h1>Product Design Course </h1>
          <h3>Product Factory</h3>
        </div>
        <article className={styles.infoContainer__text}>
          <p>
            Learn how design thinking, user research,
            <br />
            business vision and marketing, and finally designing
            <br />
            and creating real digital products for real users.
          </p>
        </article>
        <button className={styles.infoContainer__button}>Start Register</button>
      </div>
    );
  };

  const renderImage = () => {
    return <img src="images/hero.png" />;
  };

  const renderOverlayText = () => {
    return (
      <div className={styles.overlay}>
        <svg
          width="551"
          height="127"
          viewBox="0 0 551 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.04">
            <path
              d="M25.3132 121.031C17.334 117.242 11.1449 112.12 6.74123 105.664C2.33755 99.2106 0.135742 92.1935 0.135742 84.6123V0.583984H33.4504V86.0335C33.4504 88.0486 34.1506 90.2383 35.5565 92.6066C36.9602 94.977 39.1286 96.989 42.0662 98.6467C45.0005 100.306 48.5759 101.134 52.7882 101.134C57.0004 101.134 60.5424 100.306 63.4144 98.6467C66.2863 96.989 68.3925 95.0048 69.7327 92.6954C71.0729 90.386 71.743 88.1653 71.743 86.0335V0.583984H105.441V84.6123C105.441 92.1935 103.239 99.2106 98.8351 105.664C94.4314 112.12 88.239 117.242 80.2632 121.031C72.2841 124.82 63.1272 126.715 52.7882 126.715C42.4492 126.715 33.289 124.82 25.3132 121.031Z"
              fill="black"
            />
            <path
              d="M151.008 0.583984V123.518H118.842V0.583984H151.008Z"
              fill="black"
            />
            <path
              d="M275.267 0.583984L228.932 123.518H196.766L242.909 0.583984H275.267Z"
              fill="black"
            />
            <path
              d="M346.968 121.031C338.989 117.242 332.8 112.12 328.396 105.664C323.993 99.2106 321.79 92.1935 321.79 84.6123V0.583984H355.104V86.0335C355.104 88.0486 355.805 90.2383 357.211 92.6066C358.613 94.977 360.783 96.989 363.72 98.6467C366.656 100.306 370.23 101.134 374.443 101.134C378.654 101.134 382.197 100.306 385.068 98.6467C387.94 96.989 390.047 95.0048 391.388 92.6954C392.728 90.386 393.397 88.1653 393.397 86.0335V0.583984H427.095V84.6123C427.095 92.1935 424.894 99.2106 420.489 105.664C416.087 112.12 409.893 117.242 401.917 121.031C393.939 124.82 384.781 126.715 374.443 126.715C364.103 126.715 354.943 124.82 346.968 121.031Z"
              fill="black"
            />
            <path
              d="M435.326 0.583984H470.556L492.766 39.3116L515.167 0.583984H550.013L513.061 62.0508L550.013 123.518H515.358L492.766 84.9676L470.364 123.518H435.326L472.662 62.0508L435.326 0.583984Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <section className={styles.container}>
      {renderOverlayText()}
      {renderInfo()}
      {renderImage()}
    </section>
  );
}
