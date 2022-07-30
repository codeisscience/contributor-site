import React from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { motion } from 'framer-motion';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import brand from '../../static/img/brand.png';
import { Button } from '@mui/material';
import { GitHub, Web } from '@mui/icons-material';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const floating = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(-200px);
  }
`;

const BrandContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    object-fit: cover;
    height: 150px;
    width: auto;
  }
`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className='hero hero--primary'>
      <BrandContainer>
        <img src='/img/brand.png' alt='Undraw Illustration' />
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
          <Button
            style={{ marginRight: '16px', color: '#000' }}
            variant='contained'
            color='inherit'
            startIcon={<Web />}
          >
            Website
          </Button>
          <Button
            style={{ color: '#000' }}
            variant='contained'
            color='inherit'
            startIcon={<GitHub />}
          >
            GitHub
          </Button>
        </div>
      </BrandContainer>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title='Community Website' description='Description will go into a meta tag in <head />'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
