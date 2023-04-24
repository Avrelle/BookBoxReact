import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Button, View, FlatList, ImageComponent } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import ScanScreen from './screens/ScanScreen';
import ProfilScreen from './screens/ProfilScreen' 
import Login from './screens/Login';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Profile" component={ProfilScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonScanCard : {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center', 
  },
  containerScan: {
      flex:1,
      backgroundColor: '#0C5443',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
}); 
 