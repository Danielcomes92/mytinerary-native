import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigation/Drawer';

import mainReducer from './redux/reducer/mainReducer';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

function App() {

  return (
    <> 
      <Provider store={myStore}>
        <StatusBar
          animated={true}
          backgroundColor="#000115"
          barStyle={"dark-content"}
        />
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App