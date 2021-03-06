import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';
import Current from './Current';
import Days from './Days';
import Hourly from './Hourly';
import SevenDay from './SevenDay';
import Conditions from './Conditions';
import AirPollution from './AirPollution';
import Loading from './Loading';
import { EXPO_API_KEY } from '@env';

export default function Forecast({ lat, lon, liveLocation }) {
  const [onecallData, setOnecallData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${EXPO_API_KEY}&units=metric&exclude=current,minutely`
    )
      .then((response) => response.json())
      .then((data) => {
        setOnecallData(data);
        setIcon(data.hourly[0].weather[0].icon);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {isLoaded ? (
        <ImageBackground
          source={
            icon[2] === 'd'
              ? require('../assets/background-light.png')
              : require('../assets/background-dark.png')
          }
          style={styles.background}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <StatusBar style="auto" />
            <View style={styles.appContainer}>
              <View style={styles.container}>
                <Current lat={lat} lon={lon} liveLocation={liveLocation} />
                <Days data={onecallData} />
                <Hourly data={onecallData} />
                <SevenDay data={onecallData} />
                <Conditions data={onecallData} />
                <AirPollution lat={lat} lon={lon} />
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      ) : (
        <Loading />
      )}
    </>
  );
}
