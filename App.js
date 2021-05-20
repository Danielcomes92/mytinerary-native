import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Bottom from './navigation/Bottom'
import { Text, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <>  
  
      <NavigationContainer>
        <Bottom />
      </NavigationContainer>
  
    </>
  );
}

const styles = StyleSheet.create({
  
});


