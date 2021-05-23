import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';


import { applyMiddleware, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigation/Drawer';

import mainReducer from './redux/reducer/mainReducer';
import authActions from './redux/actions/authActions'
import Access from './screens/Auth/Access';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

function App(props) {

  return (
    <> 
      <Provider store={myStore}>
        <NavigationContainer>
            {/* <Access /> */}
            <Drawer />
        </NavigationContainer>
      </Provider>
    </>
  );
}

// const mapStateToProps = state => {
//   return {
//       userLogged: state.authReducer.userLogged
//   }
// }

// const mapDispatchToProps = {
//     loginWithLS: authActions.loginWithLS
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App