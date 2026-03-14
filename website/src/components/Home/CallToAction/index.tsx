import React from 'react';

import Logo from '../Logo';

import styles from './styles.module.css';

function CallToAction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.container}>
        <Logo />
        <h1 className={styles.title}>Welcome to the React Native community</h1>
        <a href="/docs/environment-setup" className={styles.primaryButton}>
          Get Started
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
