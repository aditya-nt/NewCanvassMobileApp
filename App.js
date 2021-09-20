


import * as React from 'react';
import { Provider } from "react-redux";
import { store } from './store';


import Routes from './navigation';
import { LogBox } from 'react-native';
import { useState } from 'react';
import SplashScreen from './screens/SplashScreen';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['[202']);
LogBox.ignoreLogs(['P']);




export default function App() {
  const [spl, setSpl] = useState(true)

  setTimeout(() => {
    setSpl(false)
  }, 3000);

  return (
    <Provider store={store} >
      <Routes />


    </Provider>
  );
}
