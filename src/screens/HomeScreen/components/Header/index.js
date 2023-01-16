/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import type {PropsType} from './types';
import {
  ArrowIcon,
  ArrowButton,
  Container,
  Button,
  ButtonText,
  QtyContainer,
  DateContainer,
  Space,
  Title,
  TitleContainer,
} from './Styled';
import {CustomDateInput, CustomTextInput} from 'src/components';
import moment from 'moment';

export const Header = (props: PropsType): React$Node => {
  const {searchData, setSearchData, onPressSearch} = props;
  const [showSearch, setShowSearch] = useState(true);

  return (
    <Container>
      <TitleContainer>
        <Title>Find Hotel</Title>
        <ArrowButton onPress={() => setShowSearch(prevState => !prevState)}>
          <ArrowIcon showSearch={showSearch} />
        </ArrowButton>
      </TitleContainer>
      {showSearch && (
        <>
          <DateContainer>
            <CustomDateInput
              label="Check-in"
              onConfirmDate={date => {
                setSearchData(prevState => ({
                  ...prevState,
                  arrival_date: date,
                  departure_date: new Date(moment(date).add(1, 'days')),
                }));
              }}
              date={searchData.arrival_date}
            />
            <Space />
            <CustomDateInput
              label="Check-out"
              onConfirmDate={date => {
                setSearchData(prevState => ({
                  ...prevState,
                  departure_date: date,
                }));
              }}
              date={searchData.departure_date}
              minDate={new Date(moment(searchData.arrival_date).add(1, 'days'))}
            />
          </DateContainer>
          <QtyContainer>
            <CustomTextInput
              label="Room/s"
              value={searchData.room_qty}
              onChangeText={value => {
                let room_qty = value.replace(/[^0-9]/g, '');
                setSearchData(prevState => ({
                  ...prevState,
                  room_qty,
                }));
              }}
              keyboardType="numeric"
            />
            <Space />
            <CustomTextInput
              label="Guest/s"
              value={searchData.guest_qty}
              onChangeText={value => {
                let guest_qty = value.replace(/[^0-9]/g, '');
                setSearchData(prevState => ({
                  ...prevState,
                  guest_qty,
                }));
              }}
              keyboardType="numeric"
            />
          </QtyContainer>
          <Button onPress={onPressSearch}>
            <ButtonText>Find</ButtonText>
          </Button>
        </>
      )}
    </Container>
  );
};
