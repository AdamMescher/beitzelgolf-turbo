import * as React from 'react';
import styled from 'styled-components';

type HeroProps = {
  children: React.ReactNode;
};

const Hero = ({ children, ...args }: HeroProps) => {
  return <Wrapper {...args}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  height: 50vh;
  width: 100%;
  background-image: url('/assets/great-outdoors.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

export default Hero;
