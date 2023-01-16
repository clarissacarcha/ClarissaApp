/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';
import {moderateScale} from 'src/helper';

export const Container: ComponentType<any> = styled.View`
  flex: 1;
`;
export const Label: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
}))`
  color: #373737;
  font-size: ${moderateScale(13)}px;
  font-weight: bold;
`;

export const Input: ComponentType<any> = styled(TextInput).attrs(props => ({
  ...props,
}))`
  height: ${moderateScale(40)}px;
  border-radius: ${moderateScale(10)}px;
  background-color: #f4faff;
  margin-top: ${moderateScale(5)}px;
  font-size: ${moderateScale(13)}px;
  padding-horizontal: ${moderateScale(15)}px;
`;
