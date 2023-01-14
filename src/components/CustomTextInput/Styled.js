/**
 * @flow
 */

import type {ComponentType} from 'react';
import styled from 'styled-components/native';
import {Text, TextInput} from 'react-native';
import {moderateScale} from 'src/helper';

export const Label: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
}))`
  color: darkgray;
  font-size: 13;
  font-weight: bold;
  margin-bottom: ${moderateScale(5)}px;
`;

export const Input: ComponentType<any> = styled(TextInput).attrs(props => ({
  ...props,
}))`
  border-radius: 5px;
  background-color: #f7f7fa;
  margin-top: 5px;
  font-size: 13px;
  padding-horizontal: ${moderateScale(15)}px;
`;

export const Error: ComponentType<any> = styled(Text).attrs(props => ({
  ...props,
}))`
  color: red;
  margin-top: 5px;
`;
