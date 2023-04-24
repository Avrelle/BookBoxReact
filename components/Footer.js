import { StyleSheet, Text, View,  } from 'react-native';
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={{color:"white", fontSize: 30}}> Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footer : { 
     justifyContent: 'center',
     bottom:0,
     backgroundColor: "#0C5443",
     alignItems:'center',
     height: 70,
  }
});