import React from 'react';

import styles from './styles.module.css';

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {description ? (
        <h3 className={styles.description}>{description}</h3>
      ) : null}
    </div>
  );
}

export default SectionTitle;
