/**
 * @format
 * @flow
 */

import React from 'react';

import type {PropsType} from './types';
import {Label, Input, Container} from './Styled';

export const CustomTextInput = (props: PropsType): React$Node => {
  const {
    style,
    placeholder,
    placeholderTextColor = '#9E9E9E',
    value,
    onChangeText,
    returnKeyType = 'done',
    keyboardType = 'default',
    label = '',
  } = props;

  return (
    <Container>
      {label !== '' && <Label>{label}</Label>}
      <Input
        style={style}
        value={value}
        defaultValue={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
      />
    </Container>
  );
};
