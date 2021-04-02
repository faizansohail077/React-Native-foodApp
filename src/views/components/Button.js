import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import COLORS from '../../consts/colors';

const PrimaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={{ alignItems: 'center', height: 50, justifyContent: 'center', backgroundColor: COLORS.primary, borderRadius: 20 }} onPress={onPress}>
      <Text style={{ textAlign: 'center', color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={{ marginTop: 30, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, borderRadius: 30 }} onPress={onPress}>
      <Text style={{ textAlign: 'center', color: COLORS.primary, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({

});

export { PrimaryButton, SecondaryButton };
