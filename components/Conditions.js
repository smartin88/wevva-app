import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { degToCard, measureUVI } from '../helpers';
// import { EXPO_API_KEY_AMBEE } from '@env';

export default function Conditions({ data }) {
  const conditions = data.hourly[0];
  const [grassPollen] = useState('Low');
  const [treePollen] = useState('Moderate');
  const [weedPollen] = useState('Low');

  // Was using Ambee API to obtain pollen count information but API is very slow and they blocked me, therefore
  // pollen count is using mock data at the moment.

  // useEffect(() => {
  //   fetch(
  //     `https://api.ambeedata.com/latest/pollen/by-lat-lng?lat=${lat}&lng=${lon}`,
  //     {
  //       headers: {
  //         'x-api-key': EXPO_API_KEY_AMBEE,
  //         'Content-type': 'application/json',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then(({ data }) => {
  //       setPollenData(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <>
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
            <View style={styles.conditionsPair}>
              <Text style={styles.conditionsTextTitle}>Precipitation</Text>
              <Text style={styles.conditionsTextResult}>
                {Math.round(conditions.pop)}%
              </Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.conditionsPair}>
              <Text style={styles.conditionsTextTitle}>UV Index</Text>
              <Text style={styles.conditionsTextResult}>
                {Math.round(conditions.uvi)} -{' '}
                {measureUVI(Math.round(conditions.uvi))}
              </Text>
            </View>
            <View style={styles.conditionsPair}>
              <Text style={styles.conditionsTextTitle}>Grass Pollen</Text>
              <Text style={styles.conditionsTextResult}>{grassPollen}</Text>
            </View>
            <View style={styles.conditionsPair}>
              <Text style={styles.conditionsTextTitle}>Tree Pollen</Text>
              <Text style={styles.conditionsTextResult}>{treePollen}</Text>
            </View>
            <View style={styles.conditionsPair}>
              <Text style={styles.conditionsTextTitle}>Weed Pollen</Text>
              <Text style={styles.conditionsTextResult}>{weedPollen}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
