/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {FlatGrid} from 'react-native-super-grid';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
//HELPER
import {moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  flex: 1;
  background-color: #f4faff;
`;
export const Title: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
  numberOfLines: 2,
}))`
  color: #373737;
  font-weight: bold;
  margin-horizontal: ${moderateScale(16)}px;
  font-size: ${moderateScale(15)}px;
  margin-top: ${moderateScale(16)}px;
  margin-bottom: ${moderateScale(10)}px;
`;
export const GridContainer: ComponentType<any> = styled(FlatGrid).attrs(
  props => ({
    ...props,
    itemDimension: moderateScale(150),
    spacing: moderateScale(16),
  }),
)`
  flex: 1;
`;
export const ContentContainer: ComponentType<any> = styled(
  TouchableOpacity,
).attrs(props => ({
  ...props,
}))`
  border-radius: ${moderateScale(10)}px;
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
  height: ${moderateScale(150)}px;
  justify-content: flex-end;
`;
export const HotelName: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
  numberOfLines: 1,
}))`
  color: white;
  font-weight: bold;
  padding: ${moderateScale(10)}px;
  background-color: #1dbaa290;
`;
export const EmptyText: ComponentType<any> = styled.Text`
  padding: ${moderateScale(10)}px;
  text-align: center;
`;
