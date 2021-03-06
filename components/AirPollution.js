import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';
import { EXPO_API_KEY } from '@env';

export default function AirPollution(props) {
  const [airPollution, setAirPollution] = useState(null);
  const { lat, lon } = props;

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${EXPO_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAirPollution(data.list[0]);
      });
  }, []);

  return (
    <View>
      {airPollution ? (
        <>
          <Text style={styles.titleText}>Air Pollution</Text>
          <View style={styles.conditionsContainer}>
            <View style={{ flex: 1 }}>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>
                  Carbon monoxide (CO)
                </Text>
                <Text style={styles.conditionsTextResult}>
                  {Math.round(airPollution.components.co)}
                </Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>
                  Nitrogen monoxide (NO)
                </Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.no)}</Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>
                  Nitrogen dioxide (NO2)
                </Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.no2)}</Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>Ozone (O3)</Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.o3)}</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>
                  Sulphur dioxide (SO2)
                </Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.so2)}</Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>Ammonia (NH3)</Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.nh3)}</Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>
                  Particulate PM2.5
                </Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.pm2_5)}</Text>
              </View>
              <View style={styles.conditionsPair}>
                <Text style={styles.conditionsTextTitle}>Particulate PM10</Text>
                <Text style={styles.conditionsTextResult}>{Math.round(airPollution.components.pm10)}</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
}
