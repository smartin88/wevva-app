import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/styles';

export default function Current(props) {
  const { icon, city, headline, temp } = props;

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <View style={styles.currentContainer}>
      {icon ? (
        <LottieView
          style={{ height: 200, width: 200 }}
          source={Images[icon]}
          autoPlay
          loop
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
      {city.length < 15 ? (
        <Text style={styles.cityText}>{city}</Text>
      ) : (
        <Text style={styles.cityTextLong}>{city}</Text>
      )}
      <Text style={styles.headlineText}>
        {headline} {temp}°C
      </Text>
    </View>
  );
}
