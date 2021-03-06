import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from './components/Search';
import Forecast from './components/Forecast';
import Loading from './components/Loading';
import Swiper from 'react-native-swiper';

export default function App() {
  const [savedCityList, setSavedCityList] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const [areCitiesLoaded, setAreCitiesLoaded] = useState(false);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@wevva-app', JSON.stringify(value));
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLatitude(currentLocation.coords.latitude);
      setLongitude(currentLocation.coords.longitude);
      setIsLocationLoaded(true);
    })();

    (async () => {
      try {
        const value = await AsyncStorage.getItem('@wevva-app');
        if (value !== null) {
          setSavedCityList(JSON.parse(value));
          setAreCitiesLoaded(true);
        }
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  function addCity(newCity) {
    const newCityList = [...savedCityList, newCity];
    storeData(newCityList);
    setSavedCityList(newCityList);
  }

  function removeCity(deleteCity) {
    let newCityList = [...savedCityList];
    newCityList = newCityList.filter((city) => city !== deleteCity);
    storeData(newCityList);
    setSavedCityList(newCityList);
  }

  function renderCities() {
    return savedCityList.map((city) => {
      city = JSON.parse(city);
      return <Forecast key={`${city.name}${city.lat}`} lat={city.lat} lon={city.lon} />;
    });
  }

  return (
    <>
      {isLocationLoaded && areCitiesLoaded ? (
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
            <Search
              savedCityList={savedCityList}
              addCity={addCity}
              removeCity={removeCity}
            />,
            <Forecast lat={latitude} lon={longitude} liveLocation={true} />,
            ...renderCities(),
          ]}
        </Swiper>
      ) : (
        <Loading />
      )}
    </>
  );
}
