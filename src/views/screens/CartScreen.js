import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { PrimaryButton } from '../components/Button';

const CartScreen = ({ navigation }) => {

  return (
    <SafeAreaView>
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({

});

export default CartScreen;
