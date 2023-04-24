import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 



export default function Button({ label, onPress }) {
    
        return (
          <View
          style={styles.buttonContainer}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#0C5443" }]}
              onPress={onPress} 
            >
                <MaterialIcons name="qr-code-scanner" size={24} color="white" style={styles.buttonIcon} />
          
              
                <Text style={[styles.buttonLabel, { color: "white", fontFamily:"Baskerville"}]}>{label}</Text>
            </Pressable>
        </View>
        );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
