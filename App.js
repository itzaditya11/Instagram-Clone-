import React from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  StatusBar: {
    backgroundColor: '#aa33ff',
  },
});
