import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import { styles } from '../styles/styles';
import Current from './Current';
import Day from './Day';
import Hourly from './Hourly';
import SevenDay from './SevenDay';
import Conditions from './Conditions';
import AirPollution from './AirPollution';

export default function Forecast() {
  const [location, setLocation] = useState({
    coords: { latitude: 52.520008, longitude: 13.404954 },
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const [city, setCity] = useState('Friedrichshain');
  const [icon, setIcon] = useState('01d');
  const [headline, setHeadline] = useState(Capitalize('sunny'));
  const [temp, setTemp] = useState(11);

  const [todayIcon, setTodayIcon] = useState('01d');
  const [todayHeadline, setTodayHeadline] = useState(Capitalize('sunny'));
  const [todayMinTemp, setTodayMinTemp] = useState(1);
  const [todayMaxTemp, setTodayMaxTemp] = useState(15);

  const [tomorrowIcon, setTomorrowIcon] = useState('03d');
  const [tomorrowHeadline, setTomorrowHeadline] = useState(Capitalize('rainy'));
  const [tomorrowMinTemp, setTomorrowMinTemp] = useState(2);
  const [tomorrowMaxTemp, setTomorrowMaxTemp] = useState(8);

  const [tomorrowPlusOneName, setTomorrowPlusOneName] = useState('Friday');
  const [tomorrowPlusOneIcon, setTomorrowPlusOneIcon] = useState('02d');
  const [tomorrowPlusOneHeadline, setTomorrowPlusOneHeadline] = useState(
    Capitalize('partly cloudy')
  );
  const [tomorrowPlusOneMinTemp, setTomorrowPlusOneMinTemp] = useState(1);
  const [tomorrowPlusOneMaxTemp, setTomorrowPlusOneMaxTemp] = useState(11);

  useEffect(() => {
    // (async () => {
    //   let { status } = await Location.requestPermissionsAsync();
    //   if (status !== 'granted') {
    //     setErrorMsg('Permission to access location was denied');
    //     return;
    //   }
    //   let location = await Location.getCurrentPositionAsync({});
    //   setLocation(location);
    // })();
  }, []);

  if (errorMsg) {
    setCity(errorMsg);
  } else if (location) {
    let lat = JSON.stringify(location.coords.latitude);
    let lon = JSON.stringify(location.coords.longitude);

    // Fetch Current Conditions
    // fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed9c1bd5a94c874b18cefd09384d9877&units=metric`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCity(data.name);
    //     setHeadline(Capitalize(data.weather[0].description));
    //     setTemp(Math.round(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //   });
  }

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <ImageBackground
      source={require('../assets/background-light.png')}
      style={styles.background}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={styles.appContainer}>
          <View style={styles.container}>
            <Current city={city} icon={icon} headline={headline} temp={temp} />
            <View style={styles.daysContainer}>
              <Day
                name="Today"
                icon={todayIcon}
                headline={todayHeadline}
                minTemp={todayMinTemp}
                maxTemp={todayMaxTemp}
              />
              <Day
                name="Tomorrow"
                icon={tomorrowIcon}
                headline={tomorrowHeadline}
                minTemp={tomorrowMinTemp}
                maxTemp={tomorrowMaxTemp}
              />
              <Day
                name={tomorrowPlusOneName}
                icon={tomorrowPlusOneIcon}
                headline={tomorrowPlusOneHeadline}
                minTemp={tomorrowPlusOneMinTemp}
                maxTemp={tomorrowPlusOneMaxTemp}
              />
            </View>
            <Hourly location={location} />
            <SevenDay location={location} />
            <Conditions location={location} />
            <AirPollution location={location} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
