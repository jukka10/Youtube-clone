import 'react-native-gesture-handler';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home/index';
import Default from './pages/Default/index';

const App = () => {
  Icon.loadFont();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        tabStyle: {
          backgroundColor: '#282828',
        },
      }}>
      <Tab.Screen
        component={Home}
        name="Inicio"
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={Default}
        name="Explorar"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="compass" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Default}
        name="Inscrições"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="youtube-play" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Default}
        name="Caixa entrada"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="envelope" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={Default}
        name="Biblioteca"
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="play-circle" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
