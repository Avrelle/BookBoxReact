import { StyleSheet, Text, View,  } from 'react-native';
import React from "react";
import ButtonIconBook from "../components/ButtonIconBook";
import ButtonIconBox from '../components/ButtonIconBox';
import { useState } from "react";


export default function Footer() {
  const [condition, setCondition] = useState(false) 
  const navig = () => {
    setCondition(true)
    navigation.navigate("Test")
  }
  return (
    <View style={styles.footer}>

      <View style={styles.button}>
          <ButtonIconBook onPress={navig}/>
      </View>

      <View>
          <ButtonIconBox onPress={navig}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    footer : { 
      display: "flex",
     position: 'absolute',
     justifyContent: 'center',
     bottom:0,
     backgroundColor: "#0C5443",
     alignItems:'center',
     height: 70,
     width:'100%',
  },
  button : {
    position: 'relative',
    top: 10,
    left: '-11%'
}


});