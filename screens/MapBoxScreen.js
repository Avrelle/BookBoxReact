import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MapBoxScreen() {
  const Stack = createNativeStackNavigator();
    return (
      <View>
        <Text>MapBoxScreen</Text>
      </View>
    )
  }
