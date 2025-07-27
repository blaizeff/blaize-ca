import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp; 