import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default function Conditions(props) {
  const conditions = props.data.hourly[0];

  return (
    <View>
      <Text style={styles.titleText}>Conditions</Text>
      <View style={styles.conditionsContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Feels like</Text>
            <Text style={styles.conditionsTextResult}>
              {Math.round(conditions.feels_like)}°C
            </Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Humidity</Text>
            <Text style={styles.conditionsTextResult}>
              {conditions.humidity}%
            </Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Wind</Text>
            <Text style={styles.conditionsTextResult}>
              {Math.round(conditions.wind_speed)}km/h{' '}
              {degToCard(conditions.wind_deg)}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>Precipitation</Text>
            <Text style={styles.conditionsTextResult}>
              {Math.round(conditions.pop)}%
            </Text>
          </View>
          <View style={styles.conditionsPair}>
            <Text style={styles.conditionsTextTitle}>UV Index</Text>
            <Text style={styles.conditionsTextResult}>
              {Math.round(conditions.uvi)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const degToCard = function (deg) {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  let degrees = deg * 8 / 360;
  degrees = Math.round(degrees, 0);
  degrees = (degrees + 8) % 8
  return (directions[degrees]);
};
