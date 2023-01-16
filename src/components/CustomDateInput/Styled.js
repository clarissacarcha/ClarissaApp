/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Image, TouchableOpacity, Text} from 'react-native';
import {moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  flex: 1;
`;
export const Button: ComponentType<any> = styled(TouchableOpacity).attrs(
  props => ({
    ...props,
  }),
)`
  margin-top: ${moderateScale(5)}px;
  padding-horizontal: ${moderateScale(10)}px;
  height: ${moderateScale(40)}px;
  border-radius: ${moderateScale(10)}px;
  background-color: #f4faff;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
}))`
  flex: 1;
  font-size: ${moderateScale(13)}px;
  margin-left: ${moderateScale(10)}px;
  color: black;
`;

export const ButtonImage: ComponentType<any> = styled(Image).attrs(props => ({
  ...props,
  source: require('src/assets/calendar-icon.png'),
}))`
  width: ${moderateScale(20)}px;
  height: ${moderateScale(20)}px;
`;

export const Label: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
}))`
  color: #373737;
  font-size: ${moderateScale(13)}px;
  font-weight: bold;
`;
