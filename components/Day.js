import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
// import * as Location from 'expo-location';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/styles';

export default function Day(props) {
  const { name, icon, headline, minTemp, maxTemp } = props;
  return (
    <View style={styles.forecastList}>
      <View style={styles.forecastListLeft}>
        {icon ? (
          <LottieView
            style={{ height: 50, width: 50, marginRight: 10 }}
            source={Images[icon]}
            autoPlay
            loop
          />
        ) : (
          <ActivityIndicator size="small" color="#fff" />
        )}
        <Text style={styles.forecastText}>{name} - {headline}</Text>
      </View>
      <View style={styles.forecastListRight}>
        <Text style={styles.forecastText}>
          {minTemp} / {maxTemp}°C
        </Text>
      </View>
    </View>
  );
}
