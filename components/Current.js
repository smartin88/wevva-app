import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { Icon } from 'galio-framework';
import Images from '../assets/index.js';
import { styles } from '../styles/styles';
import { Capitalize } from '../helpers';
import { EXPO_API_KEY_OWM } from '@env';
import axios from 'axios';

export default function Current({ lat, lon, liveLocation }) {
  const [city, setCity] = useState(null);
  const [icon, setIcon] = useState(null);
  const [headline, setHeadline] = useState(null);
  const [temp, setTemp] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Second API call - required to obtain current conditions which are not part of the OneCall API
  // fetched in Forecast
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.stringify(
          lat
        )}&lon=${JSON.stringify(lon)}&appid=${EXPO_API_KEY_OWM}&units=metric`
      )
      .then(({ data }) => {
        setCity(data.name);
        setHeadline(Capitalize(data.weather[0].description));
        setTemp(Math.round(data.main.temp));
        setIcon(data.weather[0].icon);
        setIsLoaded(true);
      })
      .catch((e) => alert('Error: ', e));
  }, []);

  // Renders location-pin icon which only displays when forecast page is based on the user's live
  // location
  const locationIcon = (
    <Icon name="location-pin" family="Entypo" color="white" size={30} />
  );

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
            <Text style={styles.cityText}>
              {liveLocation ? locationIcon : null}
              {city}
            </Text>
          ) : (
            <Text style={styles.cityTextLong}>
              {liveLocation ? locationIcon : null}
              {city}
            </Text>
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
