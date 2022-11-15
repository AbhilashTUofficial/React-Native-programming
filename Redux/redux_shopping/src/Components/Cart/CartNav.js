import {useNavigation} from '@react-navigation/native';
import {React, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';

const CartNav = ({cart}) => {
  const navigation = useNavigation();
  console.log(cart);
  const [cartItemCount, setcartItemCount] = useState(0);

  useEffect(() => {
    setcartItemCount(cart.length);
  }, [cart, cartItemCount]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('cartscreen')}>
      <Text style={style.text}>Cart({cartItemCount})</Text>
    </TouchableOpacity>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.data.cart,
  };
};

export default connect(mapStateToProps)(CartNav);

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#202020',
  },
});
