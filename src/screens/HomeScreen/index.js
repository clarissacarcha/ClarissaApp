/**
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import type {PropsType} from './types';
import {
  Container,
  GridContainer,
  ContentContainer,
  Title,
  BackgroundImage,
  HotelName,
} from './Styled';
import {GeolocationUtility} from '../../util';
import {getHotelsNearYou} from '../../reducers/hotelsReducer';
import {connect} from 'react-redux';
import {SAMPLE_HOTELS} from '../../helper';

const MainComponent = (props: PropsType): React$Node => {
  // eslint-disable-next-line no-unused-vars
  const {getHotelsNearYouDispatch, hotelsNearby} = props;
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const defaultDetla = 0.1;
      const {longitude, latitude} = currentLocation.coords;
      //bbox formula
      const southLat = latitude - defaultDetla;
      const northLat = latitude + defaultDetla;
      const westLng = longitude - defaultDetla;
      const eastLng = longitude + defaultDetla;
      const bbox = `${southLat},${northLat},${westLng},${eastLng}`;

      //PARAMS
      // const params = {
      //   arrival_date: '2023-01-14',
      //   departure_date: '2023-01-15',
      //   room_qty: '1',
      //   guest_qty: '1',
      //   bbox,
      // };

      // getHotelsNearYouDispatch(params);
    }
  }, [getHotelsNearYouDispatch, currentLocation]);

  const getLocation = async () => {
    const location = await GeolocationUtility.getCurrentLocation();
    setCurrentLocation(location);
  };

  return (
    <Container>
      <Title>Hotels Near You</Title>
      <GridContainer
        data={SAMPLE_HOTELS.result}
        renderItem={({item}) => (
          <ContentContainer>
            <BackgroundImage backgroundImage={item.main_photo_url}>
              <HotelName>{item.hotel_name}</HotelName>
            </BackgroundImage>
          </ContentContainer>
        )}
      />
    </Container>
  );
};

const mapStateToProps: Object | Array<Object> = state => ({
  hotelsNearby: state,
});

const mapDispatchToProps: any = dispatch => ({
  getHotelsNearYouDispatch: params => dispatch(getHotelsNearYou(params)),
});

export const HomeScreen: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
