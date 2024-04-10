import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Home from '../Screens/Home'


const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})