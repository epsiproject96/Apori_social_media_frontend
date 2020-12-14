import React, { Component } from 'react';
import {AppParamList} from './AppParamList';
import { Parametre } from '../screens/Parametre';
import { Home } from '../screens/Home';
import { MonProfil } from '../screens/MonProfil';
import { Abonnement } from '../screens/Abonnement';
import { Rechercher } from '../screens/Rechercher';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

interface AppTabsProps {}

const Tab = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MonProfil" component={MonProfil} />
      <Tab.Screen name="Abonnement" component={Abonnement} />
      <Tab.Screen name="Rechercher" component={Rechercher} />
      <Tab.Screen name="Parametre" component={Parametre} />
    </Tab.Navigator>
  );
};