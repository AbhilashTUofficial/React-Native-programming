import {useRoute} from '@react-navigation/native';
import {React} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';

const ShopView = shopData => {
  const route = useRoute();
  const shopName = route.params.shopName;

  return <View></View>;
};

export default ShopView;

const style = StyleSheet.create({
  shopCard: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 80,
  },
  imgCont: {
    height: 120,
    width: 120,
    overflow: 'hidden',
    borderRadius: 8,
  },
  shopTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#404040',
    marginVertical: 8,
  },
  circularBtn: {
    backgroundColor: 'white',
    elevation: 3,
    width: 40,
    height: 40,
    borderRadius: 24,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemCont: {
    borderColor: '#808080',
    borderWidth: 0.6,
    borderRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  addBtn: {
    backgroundColor: 'purple',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
  },
});
