


import * as React from 'react';
import { Provider } from "react-redux";
import { store } from './store';


import Routes from './navigation';
import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Setting a timer']);




export default function App() {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
}
