import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import Search from './Search';
import Forecast from './Forecast';
import Loading from './Loading';
import { useApp } from '../AppContext';

export default function App() {
  const { savedCityList, latitude, longitude } = useApp();

  const renderCities = () => {
    let mappedCityList = [...savedCityList];
    return mappedCityList.map((city) => {
      city = JSON.parse(city);
      return (
        <Forecast
          key={`${city.name}${city.lat}`}
          lat={city.lat}
          lon={city.lon}
        />
      );
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      {latitude && longitude ? (
        // Swiper component allows user to swipe between different cities and access search component
        // by swiping to the far left
        <Swiper
          loop={false}
          bounces={true}
          index={1}
          dotColor="#fff"
          activeDotColor="#4d4d4d"
          keyboardShouldPersistTaps={'handled'}
          showsPagination={false}
        >
          {[
            <Search key="0" />,
            <Forecast
              key="1"
              lat={latitude}
              lon={longitude}
              liveLocation={true}
            />,
            ...renderCities(),
          ]}
        </Swiper>
      ) : (
        <Loading text={'Finding your location...'} />
      )}
    </>
  );
}
