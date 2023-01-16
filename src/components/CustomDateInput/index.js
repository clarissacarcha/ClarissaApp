/**
 * @format
 * @flow
 */

import React, {useState} from 'react';

import type {PropsType} from './types';
import {Button, ButtonImage, ButtonText, Container, Label} from './Styled';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

export const CustomDateInput = (props: PropsType): React$Node => {
  const {date, onConfirmDate, label, minDate} = props;
  const minimumDate = minDate ? minDate : new Date();
  const maximumDate = moment().add(1, 'years');
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      {label !== '' && <Label>{label}</Label>}
      <Button onPress={() => setVisible(true)}>
        <ButtonImage />
        <ButtonText>{moment(date).format('ll')}</ButtonText>
      </Button>
      <DatePicker
        modal
        open={visible}
        date={new Date(date)}
        onConfirm={value => {
          setVisible(false);
          onConfirmDate(value);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        mode="date"
        androidVariant="iosClone"
        maximumDate={new Date(maximumDate)}
        minimumDate={new Date(minimumDate)}
      />
    </Container>
  );
};
