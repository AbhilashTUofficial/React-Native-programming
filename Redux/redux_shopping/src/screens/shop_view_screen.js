import {useNavigation, useRoute} from '@react-navigation/native';
import {React, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CartItem from '../Components/Cart/CartItems';
import ShopView from '../Components/SingleShop/ShopView';
import {connect} from 'react-redux';
import {likeShop} from '../redux/Shopping/shopping-actions';

const ShopViewScreen = ({currentShop, likeShop}) => {
  const navigation = useNavigation();

  //! Localizing data
  const shopId = currentShop.id;
  const shopName = currentShop.title;
  const shopImage = currentShop.image;
  const [liked, setLike] = useState(currentShop.liked);

  const likeHandler = () => {
    setLike(!liked);
    likeShop(shopId);
  };
  return (
    <>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={style.text}>Go back</Text>
        </TouchableOpacity>
        <Text style={style.text}>Shop View</Text>
        <TouchableOpacity onPress={() => navigation.navigate('cartscreen')}>
          <Text style={style.text}>Cart(0)</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={1} style={style.shopCard}>
        <View style={style.shopCont}>
          <View style={style.imgCont}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={shopImage}
            />
          </View>

          <TouchableOpacity
            onPress={likeHandler}
            activeOpacity={0.9}
            style={style.circularBtn}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={
                liked
                  ? require('../assets/icons/heart_active.png')
                  : require('../assets/icons/heart_inactive.png')
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={style.shopTitle}>{shopName}</Text>

        <View style={{marginVertical: 12}}>
          <View style={style.itemCont}>
            <Text>Item 1</Text>
            <Text>price: </Text>
            <Text>count()</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={style.addBtn}>
            <Text style={{color: 'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    likeShop: id => dispatch(likeShop(id)),
  };
};

const mapStateToProps = state => {
  return {
    currentShop: state.data.currentShop,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopViewScreen);

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
