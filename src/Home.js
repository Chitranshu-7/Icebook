import React from "react";
import {} from '@react-navigation/native'
import { View,StyleSheet,Text,Button } from "react-native";


const Home = ({navigation}) => {
    return (
      <View>
        <Text>Home</Text>
        <View style={styles.btn} >
          <Button title='Go the Login' onPress={()=>{navigation.navigate('Login')}}></Button>
        </View>
        <Text style={styles.headA}></Text>
        <View>
          <Button title='Go the SignUp' onPress={()=>{navigation.navigate('Signup')}}></Button>
        </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      marginTop: 20
    }
    ,
    headA:{
      fontSize: 25, textAlign: "center", marginVertical: 12
    }
  });
  
  export default Home;
  