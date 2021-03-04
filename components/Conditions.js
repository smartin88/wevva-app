import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function Conditions(props) {
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
      <Text style={styles.titleText}>Conditions</Text>
      <View style={styles.conditionsContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Feels like</Text>
            <Text style={styles.conditionsTextResult}>--°C</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Humidity</Text>
            <Text style={styles.conditionsTextResult}>--%</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Wind</Text>
            <Text style={styles.conditionsTextResult}>--km/h --</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Precipitation</Text>
            <Text style={styles.conditionsTextResult}>--mm</Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>UV Index</Text>
            <Text style={styles.conditionsTextResult}>--</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
