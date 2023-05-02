import { useEffect, } from "react";
import { StyleSheet} from 'react-native';


//collect data of qr code and fetch api
export default function Login({navigation, route}) {
  const {code} = route.params;
  const loginUser = async () => {
    try {
      const response = await fetch(
        "https://lucky-grapes-run-88-161-187-10.loca.lt/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uuid: code,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      navigation.navigate('Profile',{uuid:data})
      
    } catch (error) {
      null;
    }
    
  };
  
  useEffect (() => {
    loginUser();
  })
  return null
}

const styles = StyleSheet.create({})

    
    