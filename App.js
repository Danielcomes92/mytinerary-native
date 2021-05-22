import 'react-native-gesture-handler';
import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducer/mainReducer';

import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigation/Drawer';
import { StatusBar } from 'react-native';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <> 
      <Provider store={myStore}>
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
      </Provider>
    </>
  );
}


