import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';




export default function ScanScreen({ navigation }){
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
    
})
/*{
    handleBarCodeScanned();
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);*/
  const handleBarCodeScanned = async({ type, data }) => {
    setScanned(true);
    //alert(`Bar code with type ${type},and data ${data} has been scanned!`);
    navigation.navigate('Login',{code:data})
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.containerScan}>
    
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    containerScan: {
        flex:1,
        backgroundColor: '#0C5443',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
  }); 
   

