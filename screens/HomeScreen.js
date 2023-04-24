import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonScan from "../components/ButtonScan";
import {View, StyleSheet } from 'react-native';
import { useState } from "react";





export default function HomeScreen({ navigation }) {
  const [condition, setCondition] = useState(false) 
  const pipi = () => {
    setCondition(true)
    navigation.navigate("Scan")
  }
  return (
    <View style={styles.container}>
    <Header/>
     <View style={styles.buttonScanCard}>
     <ButtonScan label="Scan your card" onPress={pipi}/>

    </View>
    <Footer/>
    </View>
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
    
  }); 