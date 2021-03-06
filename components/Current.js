import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';
import { Icon } from 'galio-framework';
import { styles } from '../styles/styles';
import { EXPO_API_KEY } from '@env';

export default function Current({ lat, lon, liveLocation }) {
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [temp, setTemp] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${JSON.stringify(
        lat
      )}&lon=${JSON.stringify(
        lon
      )}&appid=${EXPO_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data.name);
        setHeadline(Capitalize(data.weather[0].description));
        setTemp(Math.round(data.main.temp));
        setIcon(data.weather[0].icon);
        setIsLoaded(true);
      });
  }, []);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const locationIcon = <Icon name="location-pin" family="Entypo" color="white" size={30} />

  return (
    <>
      {isLoaded ? (
        <View style={styles.currentContainer}>
          <LottieView
            style={{ height: 200, width: 200 }}
            source={Images[icon]}
            autoPlay
            loop
          />
          {city.length < 15 ? (
            <Text style={styles.cityText}>{liveLocation ? locationIcon : ''}{city}</Text>
          ) : (
            <Text style={styles.cityTextLong}>{liveLocation ? locationIcon : ''}{city}</Text>
          )}
          <Text style={styles.headlineText}>
            {headline} {temp}°C
          </Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </>
  );
}
