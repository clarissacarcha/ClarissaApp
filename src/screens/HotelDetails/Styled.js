/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  padding: ${moderateScale(16)}px;
`;
export const Banner: ComponentType<any> = styled(Image).attrs(props => ({
  ...props,
  resizeMode: 'cover',
}))`
  height: ${moderateScale(170)}px;
`;
export const ContentOneContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 1;
`;
export const HotelName: ComponentType<any> = styled.Text`
  color: #373737;
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
  flex-shrink: 1;
`;
export const Price: ComponentType<any> = styled.Text`
  color: #373737;
  font-size: ${moderateScale(20)}px;
  font-weight: bold;
`;
export const ReviewContainer: ComponentType<any> = styled.View`
  flex-direction: row;
  marginvertical: ${moderateScale(5)}px;
`;
export const Label: ComponentType<any> = styled.Text`
  color: #373737;
  font-size: ${moderateScale(15)}px;
  font-weight: bold;
  margin-top: ${moderateScale(15)}px;
`;
