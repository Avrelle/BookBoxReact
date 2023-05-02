import { Text, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ProfilScreen({route}) {
  const {uuid} = route.params;
  console.log(uuid);
  return (
    <View style={styles.container}>

      <Header/>
         <View>
           
              <View>
                  <Text>{uuid.name}</Text>
                  <Text>{uuid.email}</Text>
              </View>
            
        </View> 
    </View>
  );
}
  
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
}); 
 