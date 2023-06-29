import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Login';
import Signup from './src/Signup';
import Home from './src/Home';
import OnboardingScreen from './src/OnboardingScreen';
import TextSpeech from './src/TextSpeech';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding'  component={OnboardingScreen}></Stack.Screen> 
         <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
        <Stack.Screen name='TextSpeech' component={TextSpeech}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



