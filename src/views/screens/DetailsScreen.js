import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import { PrimaryButton, SecondaryButton } from '../components/Button';

const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <Icon size={28} name="arrow-back-outline" onPress={() => navigation.goBack('Home')} />
        <Text style={{ paddingLeft: 20, fontWeight: 'bold', fontSize: 15 }}>Details</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 40 }}>
        <View>
          <Image style={{ height: 200, width: 200 }} source={data.image} />
        </View>
        <View style={{ backgroundColor: COLORS.primary, flex: 1, width: '100%', borderTopLeftRadius: 70, borderTopRightRadius: 70, marginTop: 30, padding: 40 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: COLORS.white }}>Cheesy Pizza</Text>
            <View style={{ backgroundColor: COLORS.white, height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}>
              <Icon name="heart-outline" size={23} color={COLORS.primary} />
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ color: COLORS.white, lineHeight: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt accusamus rem cumque architecto autem tenetur. Odit possimus, beatae quo illo asperiores reiciendis reprehenderit laborum, in quis quidem laboriosam? Labore quo repellendus eaque illum commodi ex saepe sunt sapiente odio alias aperiam obcaecati quae, distinctio cupiditate laborum voluptas vero repellat ab?</Text>
          </View>
          <View style={{ height: 50 }}>
            <SecondaryButton title={"Add to Cart"} onPress={() => navigation.navigate("Cart")} />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({

});

export default DetailsScreen;
