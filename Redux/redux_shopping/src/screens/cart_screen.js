import {React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CartItem from '../Components/Cart/CartItems';
import CartNav from '../Components/Cart/CartNav';

const CartScreen = props => {
  return (
    <>
      <View style={style.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={style.text}>Go back</Text>
        </TouchableOpacity>
        <Text style={style.text}>Carts</Text>

        <CartNav />
      </View>
      <CartItem />
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
export default CartScreen;
