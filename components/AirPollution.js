import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function AirPollution(props) {
  const { location } = props;

  // let lat = JSON.stringify(location.coords.latitude);
  // let lon = JSON.stringify(location.coords.longitude);
  // Fetch Seven Day Forecast
  // fetch(
  //   `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ed9c1bd5a94c874b18cefd09384d9877&units=metric`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setHourlyForecast(data);
  //   });

  return (
    <View>
      <Text style={styles.titleText}>Air Pollution</Text>
      <View style={styles.conditionsContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Carbon monoxide (CO)</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>
              Nitrogen monoxide (NO)
            </Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>
              Nitrogen dioxide (NO2)
            </Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Ozone (O3)</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>
              Sulphur dioxide (SO2)
            </Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Ammonia (NH3)</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Particulate PM2.5</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Particulate PM10</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
