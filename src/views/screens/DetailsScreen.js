import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';

const DetailsScreen = ({ route }) => {
  const { data } = route.params
  console.log("TCL ~ file: DetailsScreen.js ~ line 10 ~ DetailsScreen ~ data", data)

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <View>
        <Image style={{ height: 200, width: 200 }} source={data.image} />
      </View>
      <View style={{ backgroundColor: COLORS.primary, flex: 1, width: '100%' }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({

});

export default DetailsScreen;
