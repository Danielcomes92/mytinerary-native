import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigation/Drawer'
import Header from './screens/Header';

export default function App() {
  return (
    <>  
  
      <NavigationContainer>
          <Drawer />

      </NavigationContainer>
  
    </>
  );
}


