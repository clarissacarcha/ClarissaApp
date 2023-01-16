/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
//HELPER
import {getStatusbarHeight, moderateScale} from 'src/helper';
export const BackgroundImage: ComponentType<any> = styled(
  ImageBackground,
).attrs(props => ({
  source: require('../../assets/landing-bg.jpg'),
  resizeMode: 'cover',
}))`
  flex: 1;
  padding-top: ${moderateScale(getStatusbarHeight)}px;
`;
export const Container: ComponentType<any> = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${moderateScale(30)}px;
`;
export const Title: ComponentType<any> = styled.Text`
  font-weight: bold;
  font-size: ${moderateScale(30)}px;
  color: white;
  margin-bottom: ${moderateScale(5)}px;
`;
export const Description: ComponentType<any> = styled.Text`
  font-size: ${moderateScale(17)}px;
  color: white;
`;
export const Button: ComponentType<any> = styled.TouchableOpacity`
  background-color: #1dbaa2;
  padding-vertical: ${moderateScale(15)}px;
  border-radius: ${moderateScale(5)}px;
  margin-top: ${moderateScale(50)}px;
`;
export const ButtonText: ComponentType<any> = styled.Text`
  font-size: ${moderateScale(15)}px;
  color: white;
  text-align: center;
  font-weight: bold;
`;
