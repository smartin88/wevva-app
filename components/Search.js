import React, { useState } from 'react';
import { Button, Icon } from 'galio-framework';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import Flag from 'react-native-flags';
import { EXPO_API_KEY } from '@env';

export default function Search({ savedCityList, addCity, removeCity }) {
  const [searchResult, setSearchResult] = useState([]);

  function fetchCities(string) {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${string}&appid=${EXPO_API_KEY}&limit=25`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
      });
  }

  function handleChange(textValue) {
    fetchCities(textValue);
  }

  const debounceSearch = AwesomeDebouncePromise(handleChange, 1000);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
    >
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <SearchBar
          lightTheme
          placeholder="Search for a city..."
          onChangeText={debounceSearch}
          value={[]}
          containerStyle={styles.searchInputContainerContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
        />
        {searchResult.length
          ? searchResult.map((city) => {
              return (
                <TouchableOpacity
                  key={`${city.name}${city.lat}${city.lon}`}
                  width="85%"
                  height={60}
                  style={styles.searchResultCard}
                >
                  <Text style={styles.searchResultText}>
                    <Flag code={city.country} size={32} /> {city.name}
                    {city.state ? ', ' + city.state : null}
                  </Text>
                  {savedCityList.indexOf(JSON.stringify(city)) == -1 ? (
                    <TouchableOpacity
                      color="#fff"
                      size={5}
                      width="20%"
                      style={{ position: 'absolute', right: 30 }}
                      onPress={() => {
                        addCity(JSON.stringify(city));
                      }}
                    >
                      <Icon
                        name="plus"
                        family="Entypo"
                        color="#4d4d4d"
                        size={25}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      color="#fff"
                      size={5}
                      width="20%"
                      style={{ position: 'absolute', right: 30 }}
                      onPress={() => {
                        removeCity(JSON.stringify(city));
                      }}
                    >
                      <Icon
                        name="star"
                        family="Entypo"
                        color="#4d4d4d"
                        size={25}
                      />
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              );
            })
          : savedCityList
              .map((city) => (city = JSON.parse(city)))
              .map((city) => {
                return (
                  <TouchableOpacity
                    key={`${city.lat}${city.lon}`}
                    width="85%"
                    height={60}
                    style={styles.searchResultCard}
                  >
                    <Text style={styles.searchResultText}>
                      <Flag code={city.country} size={32} /> {city.name}
                      {city.state ? ', ' + city.state : null}
                    </Text>
                    {savedCityList.indexOf(JSON.stringify(city)) == -1 ? (
                      <TouchableOpacity
                      color="#fff"
                      size={5}
                      style={{ position: 'absolute', right: 30 }}
                      onPress={() => {
                        addCity(JSON.stringify(city));
                      }}
                    >
                      <Icon
                        name="plus"
                        family="Entypo"
                        color="#4d4d4d"
                        size={25}
                      />
                    </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                      color="#fff"
                      size={5}
                      style={{ position: 'absolute', right: 30 }}
                      onPress={() => {
                        removeCity(JSON.stringify(city));
                      }}
                    >
                      <Icon
                        name="star"
                        family="Entypo"
                        color="#4d4d4d"
                        size={25}
                      />
                    </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                );
              })}
      </View>
    </ScrollView>
  );
}
