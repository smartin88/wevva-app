import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import Current from './Current';
import Days from './Days';
import Hourly from './Hourly';
import SevenDay from './SevenDay';
import Conditions from './Conditions';
import AirPollution from './AirPollution';
import Loading from './Loading';
import Map from './Map';
import { EXPO_API_KEY_OWM } from '@env';
import axios from 'axios';

export default function Forecast({ lat, lon, liveLocation }) {
  const [onecallData, setOnecallData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [icon, setIcon] = useState(null);

  // API call retrieves forecast data for location based on long/lat from Open Weather Map (live or
  // saved location)
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${EXPO_API_KEY_OWM}&units=metric&exclude=current,minutely`
      )
      .then(({ data }) => {
        setOnecallData(data);
        setIcon(data.hourly[0].weather[0].icon);
        setIsLoaded(true);
      })
      .catch((e) => alert('Error: ', e));
  }, []);

  return (
    <>
      {isLoaded ? (
        <ImageBackground
          source={
            // Sets background colour based on whether it is night or daytime at location
            icon[2] === 'd'
              ? require('../assets/background-light.png')
              : require('../assets/background-dark.png')
          }
          style={styles.background}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.appContainer}>
              <View style={styles.forecastContainer}>
                <Current lat={lat} lon={lon} liveLocation={liveLocation} />
                <Days data={onecallData} />
                <Hourly data={onecallData} />
                <SevenDay data={onecallData} />
                <Conditions data={onecallData} lat={lat} lon={lon} />
                <Map lat={lat} lon={lon} timeOfDay={icon[2]} />
                <AirPollution lat={lat} lon={lon} />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      ) : (
        <Loading text={'Loading weather data...'} />
      )}
    </>
  );
}
