import React from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { View } from 'react-native';
import { styles } from '../styles/styles';
import { EXPO_API_KEY } from '@env';

export default function Map({ lat, lon }) {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
      >
        <UrlTile
          key="weatherTile"
          urlTemplate={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${EXPO_API_KEY}`}
          zIndex={-1}
        />
      </MapView>
    </View>
  );
}
