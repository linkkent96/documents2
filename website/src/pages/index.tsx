import React from 'react';

import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

import Home from '../components/Home';

const Index = () => {
  return (
    <Layout
      description="A framework for building native apps for Android, iOS, and more using React"
      wrapperClassName="homepage">
      <Head>
        <title>React Native · Learn once, write anywhere</title>
        <meta
          property="og:title"
          content="React Native · Learn once, write anywhere"
        />
        <meta
          property="twitter:title"
          content="React Native · Learn once, write anywhere"
        />
      </Head>
      <Home />
    </Layout>
  );
};

export default Index;
