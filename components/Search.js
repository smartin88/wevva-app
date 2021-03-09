import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ForecastSearch from './ForecastSearch';

// Stack navigator is used in this component to allow user to view a single city they have searched for
const Stack = createStackNavigator();

export default function Search() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="Forecast"
          component={ForecastSearch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
