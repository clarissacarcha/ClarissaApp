/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {ImageBackground, TouchableOpacity} from 'react-native';
//HELPER
import {getStatusbarHeight, moderateScale} from 'src/helper';
export const BackgroundImage: ComponentType<any> = styled(
  ImageBackground,
).attrs(props => ({
  source: require('../../assets/landing-bg.jpg'),
  resizeMode: 'cover',
}))`
  flex: 1;
  padding-top: ${moderateScale(getStatusbarHeight)};
`;
export const Container: ComponentType<any> = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 30px;
`;
export const Title: ComponentType<any> = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin-bottom: 5px;
`;
export const Description: ComponentType<any> = styled.Text`
  font-size: 17px;
  color: white;
`;
export const Button: ComponentType<any> = styled(TouchableOpacity).attrs(
  props => ({}),
)`
  background-color: #5842ff;
  padding-vertical: 15px;
  border-radius: 5px;
  margin-top: 50px;
`;
export const ButtonText: ComponentType<any> = styled.Text`
  font-size: 15px;
  color: white;
  text-align: center;
  font-weight: bold;
`;
