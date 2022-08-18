import React from 'react';
import {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  flex: 1;

  background-color: gray;
`;

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({children}: BackgroundProps) => {
  return (
    <Container colors={['#00c6e9', '#000000', '#b517e8']}>{children}</Container>
  );
};
