import React from 'react';
import {View, Text} from 'react-native';
import Home from './src/screens/Home';
import ChooseLocation from './src/screens/ChooseLocation';
import AddressPickup from './src/components/AddressPickup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
