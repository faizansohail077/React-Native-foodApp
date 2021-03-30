import React from 'react';
import { StatusBar, StyleSheet, Text, View, } from 'react-native';
import COLORS from './consts/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './views/navigation/BottomNavigator';
import DetailsScreen from './views/screens/DetailsScreen';
import OnBoardScreen from './views/screens/OnBoardScreen';
const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ title: null, headerShown: true }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({})


export default App;
