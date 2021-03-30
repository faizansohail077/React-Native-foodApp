import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>
        <Image source={require('../../assets/onboardImage.png')} style={{ width: '100%', resizeMode: 'contain', top: -150 }} />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>Delicious Food</Text>
          <Text style={{ fontSize: 15, textAlign: 'center', opacity: 0.3, fontWeight: 'bold', marginTop: 20 }}>We help you to find best and delicious food</Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.justIndicator} />
          <View style={style.justIndicator} />
        </View>
        <PrimaryButton title={"Buy Now"} onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 20


  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.primary
  },
  justIndicator: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: COLORS.grey
  }

})

export default OnBoardScreen;
