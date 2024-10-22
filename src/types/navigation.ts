import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

export type RouteStackParamList = {
  Splash: undefined;
  Login: undefined;
};

export type StackNavigation = StackNavigationProp<RouteStackParamList>;
export type SplashNavigation = NativeStackScreenProps<
  RouteStackParamList,
  'Splash'
>;
