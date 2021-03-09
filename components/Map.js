import React from 'react';
import { View, Text } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';
import { styles } from '../styles/styles';
import nightMapStyle from '../styles/nightMapStyle.json';
import { EXPO_API_KEY_OWM } from '@env';

// Displays map of location with Open Weather Map tiles on top showing areas of rain. Quality is generally bad however
// this is the only free one I could find available as of today.

export default function Map({ lat, lon, timeOfDay }) {
  return (
    <>
      <Text style={styles.titleText}>Precipitation Map</Text>
      <View style={styles.mapContainer}>
        <MapView
          customMapStyle={timeOfDay == 'd' ? [] : nightMapStyle}
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
            urlTemplate={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${EXPO_API_KEY_OWM}`}
          />
        </MapView>
      </View>
    </>
  );
}
