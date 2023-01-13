import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from 'src/screens';

const RootStack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'HomeScreen'}
        detachInactiveScreens={false}>
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
