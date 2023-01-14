/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {FlatGrid} from 'react-native-super-grid';
import {Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
//HELPER
import {getStatusbarHeight, moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${moderateScale(getStatusbarHeight)};
`;
export const Title: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
  numberOfLines: 2,
}))`
  color: black;
  font-weight: bold;
  margin-horizontal: 16px;
  font-size: 15;
`;
export const GridContainer: ComponentType<any> = styled(FlatGrid).attrs(
  props => ({
    ...props,
    itemDimension: 150,
    spacing: 16,
  }),
)`
  flex: 1;
`;
export const ContentContainer: ComponentType<any> = styled(
  TouchableOpacity,
).attrs(props => ({
  ...props,
}))`
  border-radius: 10px;
  elevation: 2;
  background-color: white;
  overflow: hidden;
`;
export const BackgroundImage: ComponentType<any> = styled(
  ImageBackground,
).attrs(props => ({
  ...props,
  source: {uri: props.backgroundImage},
  resizeMode: 'cover',
}))`
  height: 150px;
  background-color: #5842ff20;
  justify-content: center;
  align-items: center;
`;
export const HotelName: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
  numberOfLines: 2,
}))`
  color: white;
  font-weight: bold;
`;
