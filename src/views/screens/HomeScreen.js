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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hello</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>Faizan</Text>
          </View>
          <Text style={{ fontSize: 22, color: COLORS.grey }}>What do you want today</Text>
        </View>
        <Image style={{ top: -30, width: 100, height: 100, borderRadius: 50 }} source={require('../../assets/faizan.png')} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
