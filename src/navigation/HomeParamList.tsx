import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type HomeParamList = {
  Home: undefined;
  Parametre: undefined;
  MonProfil:undefined;
  Abonnement:undefined;
  Rechercher:undefined;
};
export type HomeStacknavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
