/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  background-color: #fff;
  padding: ${moderateScale(16)}px;
`;
export const Button: ComponentType<any> = styled(TouchableOpacity).attrs(
  props => ({...props}),
)`
  background-color: #1dbaa2;
  height: ${moderateScale(40)}px;
  border-radius: ${moderateScale(5)}px;
  margin-top: ${moderateScale(20)}px;
  justify-content: center;
`;
export const ButtonText: ComponentType<any> = styled.Text`
  font-size: ${moderateScale(15)}px;
  color: white;
  text-align: center;
  font-weight: bold;
`;
export const Title: ComponentType<any> = styled.Text`
  color: #373737;
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
`;
export const DateContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  padding-vertical: ${moderateScale(10)}px;
`;
export const Space: ComponentType<any> = styled.View`
  margin: ${moderateScale(10)}px;
`;
export const QtyContainer: ComponentType<any> = styled.View`
  flex-direction: row;
`;
export const TitleContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ArrowButton: ComponentType<any> = styled.TouchableOpacity``;
export const ArrowIcon: ComponentType<any> = styled(Image).attrs(props => ({
  ...props,
  source: props.showSearch
    ? require('src/assets/up-arrow.png')
    : require('src/assets/down-arrow.png'),
}))`
  width: ${moderateScale(17)}px;
  height: ${moderateScale(17)}px;
`;
