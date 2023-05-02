import {StyleSheet, View, Pressable} from 'react-native';
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";




export default function Button({onPress}) {
    
        return (
        <View > 
                <Pressable onPress={onPress}>
                        <Icon style={styles.button} name="book"/>
                </Pressable>
        </View>
);
}

const styles = StyleSheet.create({
        button : {
               fontSize: 57,
               position: "relative",
               left: '12%'
        }
});