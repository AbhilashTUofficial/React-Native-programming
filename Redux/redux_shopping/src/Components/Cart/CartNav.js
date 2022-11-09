import {React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CartNav = props => {
  return (
    <>
      <Text style={style.text}>Cart(1)</Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#202020',
  },
});
export default CartNav;
