import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../views/screens/home/Home';
import { Screens } from './Screens';
import StudentScoreCard from '../views/screens/scorecard/StudentScoreCard';

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}>
        <Stack.Screen name="Main" component={MainRoutes} />
        <Stack.Screen name={Screens.StudentScoreCard} component={StudentScoreCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const MainRoutes = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.Home} component={Home} />
    </Stack.Navigator>
  );
};
