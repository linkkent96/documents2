import React from 'react';
import styles from './styles.module.css';

export default function Badge({icon, title}) {
  return (
    <div className={styles.container}>
      {icon}
      {title}
    </div>
  );
}
