import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({

});

export default HomeScreen;
