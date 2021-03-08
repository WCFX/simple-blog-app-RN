import 'react-native-gesture-handler';
import React from 'react';
import { BlogProvider } from './context/BlogContext';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor="#eee" />
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
