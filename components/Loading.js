import React from 'react';
import { View, ImageBackground, ActivityIndicator, Text } from 'react-native';
import { styles } from '../styles/styles';

export default function Loading({ text }) {
  return (
    <ImageBackground
      source={require('../assets/background-light.png')}
      style={styles.background}
    >
      <View style={styles.appContainer}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.forecastText}>{text}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
