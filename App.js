import { StyleSheet, Text, View } from 'react-native';
import {NativeBaseProvider,StatusBar} from 'native-base'
import Navigation from './app/Navigation/Navigation';

export default function App() {
  return (
    <NativeBaseProvider style={styles.container}>
      <StatusBar style={'light'} translucent backgroundColor='black'/>
      <Navigation/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
