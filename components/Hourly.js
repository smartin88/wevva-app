import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { format } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';
import hourlyMock from '../mocks/hourlyMock';

export default function Hourly() {
  // const { location } = props;
  const [hourlyForecast, setHourlyForecast] = useState(
    hourlyMock.list.slice(0, 20)
  );

  // let lat = JSON.stringify(location.coords.latitude);
  // let lon = JSON.stringify(location.coords.longitude);
  // Fetch Hourly Forecast
  // fetch(
  //   `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ed9c1bd5a94c874b18cefd09384d9877&units=metric`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setHourlyForecast(data);
  //   });

  return (
    <>
      <Text style={styles.titleText}>Hourly Forecast</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.hourlyContainer}>
          {hourlyForecast.map((hour, idx) => (
            <View style={styles.hourlyComponent} key={idx}>
              <View>
                <Text style={styles.hourlyText}>
                  {format(parseJSON(hour.dt_txt), 'kk:mm')}
                </Text>
              </View>
              <View>
                <LottieView
                  style={{ height: 50, width: 50 }}
                  source={Images[hour.weather[0].icon]}
                  autoPlay
                  loop
                />
              </View>
              <View>
                <Text style={styles.hourlyText}>
                  {Math.round(hour.main.temp)}°C
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
