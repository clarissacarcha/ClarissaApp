/**
 * @format
 * @flow
 */

import React from 'react';
import type {PropsType} from './types';
import {
  Banner,
  Container,
  ContentOneContainer,
  HotelName,
  Label,
  Price,
  ReviewContainer,
} from './Styled';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, ScrollView} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {SAMPLE_FACILITIES} from 'src/helper';

const HotelFacilities = () => {
  let facilitiesName = SAMPLE_FACILITIES.map(item => {
    return item.facility_name;
  }).join(', ');

  return (
    <View>
      <Text>{facilitiesName}</Text>
    </View>
  );
};

export const HotelDetails = (props: PropsType): React$Node => {
  const route = useRoute();
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: 'Hotel Details',
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
  });

  const {hotelDetails} = route.params;
  const {
    main_photo_url,
    hotel_name,
    review_score,
    review_score_word,
    address,
    price_breakdown,
    urgency_message,
    urgency_room_msg,
  } = hotelDetails;

  return (
    <ScrollView>
      <Banner source={{uri: main_photo_url}} />
      <Container>
        <ContentOneContainer>
          <HotelName>{hotel_name}</HotelName>
          <Price>
            {price_breakdown.currency}{' '}
            {price_breakdown.all_inclusive_price.toFixed(2)}
          </Price>
        </ContentOneContainer>
        <ReviewContainer>
          {review_score ? (
            <>
              <AirbnbRating
                count={5}
                defaultRating={+review_score * 0.5}
                size={15}
                showRating={false}
                readonly
              />
              <Text>
                {review_score} ({review_score_word})
              </Text>
            </>
          ) : (
            <Text>No Reviews</Text>
          )}
        </ReviewContainer>
        <Text>{address}</Text>
        <Label>Details</Label>
        {!!urgency_message && <Text>{urgency_message}</Text>}
        <Text>{urgency_room_msg}</Text>
        <Label>Facilities</Label>
        <HotelFacilities />
      </Container>
    </ScrollView>
  );
};
