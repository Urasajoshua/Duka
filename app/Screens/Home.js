import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'native-base'

const Home = () => {
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor={'#000'}/>
      <View style={{padding:13}}></View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'#16C65C',fontSize:24,fontWeight:'bold'}}>Duka Mkononi</Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})