import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ButtonScan from "../components/ButtonScan";


export default function BookScreen({navigation}) {


  return (
    <View style={styles.container}>
    <Header/>
    <View>
        <View style={styles.buttonsBorrow}> 
          <ButtonScan label="Borrow Book" onPress={console.log("test")}/>
          <ButtonScan label="Return Book" onPress={console.log("test")}/> 
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      buttonsBorrow : {
        position : "relative",
        top: "20%",
        justifyContent: 'center',
        alignItems:'center', 
      },
})