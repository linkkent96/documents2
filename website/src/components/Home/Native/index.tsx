import React from 'react';

import ThemedImage from '@theme/ThemedImage';

import Section from '../Section';
import SectionTitle from '../SectionTitle';

import styles from './styles.module.css';

function Native() {
  return (
    <Section>
      <SectionTitle
        title="Native development for everyone"
        description={
          <>
            React Native lets you create truly native apps and doesn't
            compromise your users' experiences. It provides a core set of
            platform agnostic native components like <code>View</code>,{' '}
            <code>Text</code>, and <code>Image</code> that map directly to the
            platform's native UI building blocks.
          </>
        }
      />
      <ThemedImage
        sources={{
          light: '/img/homepage/dissection.png',
          dark: '/img/homepage/dissection-dark.png',
        }}
        className={styles.flyoutIllustration}
        alt="A React Native UI pointing out native elements like Views, ScrollViews, and more"
      />
    </Section>
  );
}

export default Native;
