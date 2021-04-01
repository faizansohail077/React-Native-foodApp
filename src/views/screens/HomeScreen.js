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
import { useState } from 'react';

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 40;

const HomeScreen = ({ navigation }) => {
  const [selectCardIndex, setSelectCardIndex] = useState(0)
  const ListCatagories = () => {
    return <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={style.categoriesListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={category.id} onPress={() => setSelectCardIndex(index)}>
          <View style={{ backgroundColor: selectCardIndex === index ? COLORS.primary : COLORS.secondary, ...style.categoryBtn }}>
            <View style={style.categoryBtnImgCon}>
              <Image style={{ width: 35, height: 40, resizeMode: 'cover' }} source={category.image} />
            </View>
            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: 'bold', color: selectCardIndex === index ? COLORS.white : COLORS.primary }}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  }
  const Card = ({ food }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { data: food })} activeOpacity={0.9}>
        <View style={style.cardContainer}>
          <View style={{ alignItems: 'center', top: -40 }}>
            <Image style={{ width: 120, height: 120 }} w source={food.image} />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{food.name}</Text>
            <Text style={{ fontSize: 12, opacity: 0.8 }}>{food.ingredients}</Text>
          </View>
          <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$8.30</Text>
            </View>
            <View style={{ color: COLORS.white, height: 40, width: 40, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
              <Text style={{ color: COLORS.white, fontSize: 28 }}>+</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>)
  }
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
      <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} style={{ marginLeft: 15 }} />
          <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search" />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>

        <ListCatagories />
      </View>
      <FlatList keyExtractor={item => item.id} showsVerticalScrollIndicator={false} numColumns={2} data={foods} renderItem={({ item }) => <Card food={item} />} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoriesListContainer: {
    padding: 30,
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 10,
  }
});

export default HomeScreen;
