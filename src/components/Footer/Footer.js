import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div aria-hidden={true} className="grey-bar" />
      All character assets taken from{" "}
      <a
        href="https://www.openpeeps.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Peeps
      </a>
      , by Pablo Stanley
    </footer>
  );
};

export default Footer;
