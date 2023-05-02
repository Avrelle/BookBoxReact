import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



export default function Button({onPress }) {
    
        return (
            <View>
                <Pressable onPress={onPress}>
                        <Icon style={styles.button5} name="inbox"/>
                </Pressable>
            </View>
     
       
        );
}

const styles = StyleSheet.create({
    button5 : {
        fontSize: 57,
        position: "relative",
        left: '12%'
 }
});