import React from 'react';
import { View, ImageBackground, ActivityIndicator } from 'react-native';
import { styles } from '../styles/styles';

export default function Loading() {
  return (
    <ImageBackground
      source={require('../assets/background-light.png')}
      style={styles.background}
    >
      <View style={styles.appContainer}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
      </View>
    </ImageBackground>
  );
}
