/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Routes from './src/Routes/Routes';
 
const App: () => React$Node = () => {
  return (
    <>
     
      
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

        <StatusBar backgroundColor={'white'} barStyle='dark-content' />

        <Routes />

      </SafeAreaView>
   
    </>
  );
};



export default App;
