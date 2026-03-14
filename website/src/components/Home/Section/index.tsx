import React from 'react';

import styles from './styles.module.css';

function Section({children}: React.PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export default Section;
