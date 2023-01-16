/**
 * @format
 * @flow
 */

import React, {useEffect, useMemo, useState} from 'react';
import type {PropsType} from './types';
import {
  Container,
  GridContainer,
  ContentContainer,
  Title,
  BackgroundImage,
  HotelName,
  EmptyText,
} from './Styled';
import {GeolocationUtility} from 'src/util';
import {getHotelsNearYou} from 'src/reducers/hotelsReducer';
import {connect} from 'react-redux';
import {getBoundingBox, SAMPLE_HOTELS} from 'src/helper';
import {Header} from './components';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

const EmptyComponent = (value: string) => {
  return <EmptyText>{value}</EmptyText>;
};

const MainComponent = (props: PropsType): React$Node => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: 'Clarissa App',
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
  });

  const {getHotelsNearYouDispatch, hotels} = props;
  const [currentLocation, setCurrentLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [searchData, setSearchData] = useState({
    arrival_date: new Date(),
    departure_date: new Date(moment().add(1, 'days')),
    room_qty: '1',
    guest_qty: '1',
  });

  useEffect(() => {
    handleLocation();
  }, []);

  // get hotels
  const handleGetHotels = () => {
    const {longitude, latitude} = currentLocation;
    //get bbox
    const bbox = getBoundingBox({longitude, latitude});
    //params
    const params = {
      arrival_date: moment(searchData.arrival_date).format('YYYY-MM-DD'),
      departure_date: moment(searchData.departure_date).format('YYYY-MM-DD'),
      room_qty: searchData.room_qty,
      guest_qty: searchData.guest_qty,
      bbox,
    };

    getHotelsNearYouDispatch(params);
  };

  useEffect(() => {
    if (currentLocation.latitude) {
      handleGetHotels();
    }
  }, [currentLocation]);

  // get current location
  const handleLocation = async () => {
    const location = await GeolocationUtility.getCurrentLocation();
    setCurrentLocation(location.coords);
  };

  // handle search
  const onPressSearch = () => {
    handleGetHotels();
  };

  const displayHeaderSearch = useMemo(() => {
    return (
      <Header
        searchData={searchData}
        setSearchData={setSearchData}
        onPressSearch={() => onPressSearch()}
      />
    );
  }, [searchData]);

  const displayContent = () => {
    if (hotels?.isLoading || hotels.hotelsNearYou === null) {
      return <ActivityIndicator color="#1dbaa2" />;
    }
    if (hotels?.hotelsNearYou?.error) {
      return EmptyComponent(hotels?.hotelsNearYou?.error);
    }
    return (
      <GridContainer
        data={
          hotels?.hotelsNearYou?.result
            ? hotels.hotelsNearYou.result
            : SAMPLE_HOTELS
        }
        renderItem={({item}) => (
          <ContentContainer
            onPress={() =>
              navigation.navigate('HotelDetails', {hotelDetails: item})
            }>
            <BackgroundImage backgroundImage={item.main_photo_url}>
              <HotelName>{item.hotel_name}</HotelName>
            </BackgroundImage>
          </ContentContainer>
        )}
        ListEmptyComponent={EmptyComponent('There is no hotel near you.')}
      />
    );
  };

  return (
    <Container>
      {displayHeaderSearch}
      <Title>Hotels Near You</Title>
      {displayContent()}
    </Container>
  );
};

const mapStateToProps: Object | Array<Object> = state => ({
  hotels: state.hotelsReducer,
});

const mapDispatchToProps: any = dispatch => ({
  getHotelsNearYouDispatch: params => dispatch(getHotelsNearYou(params)),
});

export const HomeScreen: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
