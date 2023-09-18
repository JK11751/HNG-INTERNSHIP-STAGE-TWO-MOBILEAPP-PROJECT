// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EditScreen from '../screens/EditScreen';
import GitHubScreen from '../screens/GitHubScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="GitHub" component={GitHubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
