import React from "react";
import styles from "../styles/components/spinner.module.scss";

const LoadingSpinner = ({ loadState, elementToRend }) => {
  return (
    <>{loadState ?<div className={styles.container}><span className={styles.loader}></span></div>:elementToRend}</>
  );
};

export default LoadingSpinner;
