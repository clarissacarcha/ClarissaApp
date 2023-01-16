/**
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
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
import {PermissionUtility} from 'src/util';
import {Alert, Linking} from 'react-native';

export const LandingScreen = (props: PropsType): React$Node => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: 'Landing',
    headerShown: false,
  });

  useEffect(() => {
    getLocation();
  }, []);

  //location permission
  const getLocation = async () => {
    const locationAccess = await PermissionUtility.getLocationPermission();
    if (!locationAccess.granted) {
      Alert.alert(
        locationAccess.message,
        'In order to proceed, enable location in Settings > Permissions > Location',
        [{text: 'Settings', onPress: () => Linking.openSettings()}],
      );
    }
  };

  return (
    <BackgroundImage>
      <Container>
        <Title>Are you ready?</Title>
        <Description>
          Find your hotel easily and manage your booking.
        </Description>
        <Button onPress={() => navigation.navigate('HomeScreen')}>
          <ButtonText>Let's Start</ButtonText>
        </Button>
      </Container>
    </BackgroundImage>
  );
};
