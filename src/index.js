import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import routes from './App';
import Landing from './pages/Landing/index';

const Index = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={Landing} name="landing-page" />
        <Stack.Screen component={routes} name="app" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
