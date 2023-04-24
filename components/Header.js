import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{color:"white", fontSize: 30,}}> BooKette</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header : { 
   justifyContent: 'center',
   backgroundColor: "#0C5443",
   alignItems:'center',
   height: 70,
}
});