import * as React from 'react';
import Search from './components/Search';
import Forecast from './components/Forecast';
import Swiper from 'react-native-swiper';

export default function App() {
  return (
    <Swiper
      loop={false}
      index={1}
      paginationStyle={{
        position: 'absolute',
        top: -670,
      }}
      dotColor="white"
      activeDotColor="grey"
    >
      <Search />
      <Forecast />
      <Forecast />
      <Forecast />

    </Swiper>
  );
}
