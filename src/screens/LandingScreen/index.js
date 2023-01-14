/**
 * @format
 * @flow
 */

import React from 'react';
import type {PropsType} from './types';
import {
  BackgroundImage,
  Button,
  ButtonText,
  Container,
  Description,
  Title,
} from './Styled';
import {useNavigation} from '@react-navigation/native';

export const LandingScreen = (props: PropsType): React$Node => {
  const navigation = useNavigation();

  return (
    <BackgroundImage>
      <Container>
        <Title>Are you ready?</Title>
        <Description>Find your hotel easily</Description>
        <Button onPress={() => navigation.navigate('HomeScreen')}>
          <ButtonText>Let's Start</ButtonText>
        </Button>
      </Container>
    </BackgroundImage>
  );
};
