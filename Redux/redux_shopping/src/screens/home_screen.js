import {React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Shops from '../Components/Shop/Shops';
import {useNavigation} from '@react-navigation/native';
import CartNav from '../Components/Cart/CartNav';

const HomeScreen = ({products}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={style.header}>
        <Text style={style.text}>Home</Text>
        <Text style={style.text}>Shops</Text>
        <CartNav />
      </View>
      <Shops />
    </>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#202020',
  },
});

export default HomeScreen;
