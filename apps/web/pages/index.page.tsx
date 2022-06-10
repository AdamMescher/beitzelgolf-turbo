import * as React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@acme/core';
import Hero from '../components/Hero';
import GreatOutdoors from '../assets/great-outdoors.jpg';

const Home: NextPage = () => {
  return (
    <Wrapper data-testid={'home'}>
      <Head>
        <title>Beitzel Golf</title>
        <meta
          name='description'
          content='Brian Beitzel golf professional personal website'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero>
          <HeroContent>
            <h1>Brian Beitzel</h1>
          </HeroContent>
        </Hero>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 100%;
  & > img {
    object-fit: contain;
    width: 100%;
    position: relative;
    height: unset;
  }
`;
const HeroContent = styled.div`
  display: grid;
  place-items: center;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

export default Home;
