import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { ImageBackground, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/styles';

export default function Search() {
  const [search, setSearch] = useState(null);

  return (
    <ImageBackground
      source={require('../assets/background-light.png')}
      style={styles.background}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={styles.appContainer}>
          <SearchBar
            onChangeText={() => {}}
            value={search}
            placeholder="Search for a city..."
            containerStyle={{
              paddingTop: 20,
              backgroundColor: 'rgba(255,255,255,0)',
              width: '90%',
              borderTopWidth: 0,
              borderBottomWidth: 0,
            }}
            inputContainerStyle={{ backgroundColor: 'white' }}
            inputStyle={{ backgroundColor: 'white' }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
