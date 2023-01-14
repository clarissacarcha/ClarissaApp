import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, LandingScreen} from 'src/screens';

const RootStack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'LandingScreen'}
        detachInactiveScreens={false}>
        <RootStack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{swipeEnabled: false}}
        />
        <RootStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{swipeEnabled: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
