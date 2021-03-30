import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import COLORS from '../../consts/colors';

const PrimaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, borderRadius: 20 }} onPress={onPress}>
      <Text style={{ textAlign: 'center', color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};
const SecondaryButton = () => {
  return (
    <TouchableOpacity >
      <View >
        <Text>SecondaryButton</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({

});

export { PrimaryButton, SecondaryButton };
