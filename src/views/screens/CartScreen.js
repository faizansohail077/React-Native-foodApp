import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { PrimaryButton } from '../components/Button';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const CartScreen = ({ navigation }) => {
  const Card = ({ food }) => {
    console.log("Car", food)
    return <View>
      <View style={style.cardContainer}>

        <Image style={{ height: 50, width: 50 }} source={food.image} />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{food.name}</Text>
          <Text style={{ fontSize: 12 }}>{food.ingredients}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>${food.price}</Text>

        </View>
        <View>
          <Text>3</Text>
          <View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ height: 20, backgroundColor: COLORS.primary, width: 30, textAlign: 'center', borderRadius: 20, color: 'white' }}>-</Text>
            <Text style={{ height: 20, backgroundColor: COLORS.primary, width: 30, textAlign: 'center', borderRadius: 20, color: 'white' }}>+</Text>
          </View>
        </View>
      </View>
    </View>
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <Icon size={42} name="arrow-back-outline" onPress={() => navigation.goBack('Home')} />
        <Text style={{ paddingLeft: 20, fontWeight: 'bold', fontSize: 15 }}>Cart</Text>
      </View>
      <FlatList keyExtractor={item => item} data={foods} renderItem={({ item }) => <Card food={item} />} />
      <View style={{ flex: 1, marginHorizontal: 50 }}>
        <PrimaryButton title={'Checkout'} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 10,
    marginBottom: 20,
    justifyContent: 'space-around',
    height: 70,
    borderRadius: 20,
    flexDirection: 'row'
  }
});

export default CartScreen;
