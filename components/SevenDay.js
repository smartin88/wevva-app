import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';

export default function SevenDay({ data }) {
  const daily = data.daily.slice(1, 8);

  return (
    <>
      <Text style={styles.titleText}>7 Day Forecast</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.sevenDayContainer}>
          {daily.map((day, idx) => (
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
