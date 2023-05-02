import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, StyleSheet, SafeAreaView, Button, View, FlatList, ImageComponent } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import ScanScreen from './screens/ScanScreen';
import ProfilScreen from './screens/ProfilScreen' 
import Login from './screens/Login';
import MapBoxScreen from './screens/MapBoxScreen';
import BookScreen from './screens/BookScreen';
import Test from './screens/Test';

const tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} />
          <Stack.Screen name="Profile" component={ProfilScreen}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Book" component={BookScreen}/>

          <Stack.Screen name="Test" component={Test}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  
}); 
 