import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children: React.ReactNode;
}

const Base = styled.button`
  border: 2px solid;
  background: none;
  color: inherit;
  padding: 0.5rem 1rem;
`;

export function Button(props: ButtonProps) {
  return <Base>{props.children}</Base>;
}

Button.displayName = 'Button';
