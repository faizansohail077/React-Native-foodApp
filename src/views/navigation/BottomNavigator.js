import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <View>
      <Text>BottomNavigator</Text>
    </View>
  );
};

export default BottomNavigator;
