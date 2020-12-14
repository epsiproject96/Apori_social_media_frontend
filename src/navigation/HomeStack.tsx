import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Parametre } from '../screens/Parametre';
import { HomeParamList  } from './HomeParamList';
import { Abonnement } from '../screens/Abonnement';
import { MonProfil } from '../screens/MonProfil';
import { Rechercher } from '../screens/Rechercher';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Parametre" component={Parametre} />
      <Stack.Screen name="Abonnement" component={Abonnement} />
      <Stack.Screen name="MonProfil" component={MonProfil} />
      <Stack.Screen name="Rechercher" component={Rechercher} />
    </Stack.Navigator>
  );
};
