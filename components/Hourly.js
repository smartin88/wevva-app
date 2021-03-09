import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/styles';
import { format } from 'date-fns';
import fromUnixTime from 'date-fns/fromUnixTime';
import Images from '../assets/index.js';
import LottieView from 'lottie-react-native';

export default function Hourly({ data }) {
  const hourly = data.hourly.slice(0, 24);

  return (
    <>
      <Text style={styles.titleText}>Hourly Forecast</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.hourlyContainer}>
          {hourly.map((hour) => (
            <View style={styles.hourlyComponent} key={hour.dt}>
              <View>
                <Text style={styles.hourlyText}>
                  {format(fromUnixTime(hour.dt), 'kk:mm')}
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
                <Text style={styles.hourlyText}>{Math.round(hour.temp)}°C</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
