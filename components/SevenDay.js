import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';
import sevenDayMock from '../mocks/sevenDayMock';

export default function SevenDay(props) {
  const { location } = props;
  const [sevenDayForecast, setSevenDayForecast] = useState(
    sevenDayMock.daily
  );

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
    <>
      <Text style={styles.titleText}>7 Day Forecast</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.sevenDayContainer}>
          {sevenDayForecast.map((day, idx) => (
            <View style={styles.sevenDayComponent} key={idx}>
              <View>
                <Text style={styles.sevenDayText}>
                  {format(fromUnixTime(day.dt), 'eee')}
                </Text>
              </View>
              <View>
                <LottieView
                  style={{ height: 50, width: 50 }}
                  source={Images[day.weather[0].icon]}
                  autoPlay
                  loop
                />
              </View>
              <View>
                <Text style={styles.sevenDayText}>
                  {Math.round(day.temp.day)}°C
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
