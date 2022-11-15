import {useNavigation} from '@react-navigation/native';
import {React, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import CartNav from '../Components/Cart/CartNav';
import {likeShop, addToCart} from '../redux/Shopping/shopping-actions';

const ShopViewScreen = ({currentShop, likeShop, addToCart}) => {
  const navigation = useNavigation();

  //! Localizing data
  const shopId = currentShop.id;
  const shopName = currentShop.title;
  const shopImage = currentShop.image;
  const shopItems = currentShop.items;
  const [liked, setLike] = useState(currentShop.liked);

  const likeHandler = () => {
    setLike(!liked);
    likeShop(shopId);
  };

  return (
    <>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.navigate('homescreen')}>
          <Text style={style.text}>Go back</Text>
        </TouchableOpacity>
        <Text style={style.text}>Shop View</Text>
        <CartNav />
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
        {shopItems.map(item => {
          const itemName = item.itemName;
          const itemPrice = item.price;

          const [itemCount, setItemCount] = useState(item.count);

          const addToCartHandler = itemName => {
            addToCart(shopId, itemName);
            setItemCount(item.count);
          };

          return (
            <View key={itemName} style={{marginVertical: 12}}>
              <View style={style.itemCont}>
                <Text>{itemName}</Text>
                <Text>{itemPrice}</Text>
                <Text>{itemCount}</Text>
              </View>
              <TouchableOpacity
                onPress={() => addToCartHandler(itemName)}
                activeOpacity={0.8}
                style={style.addBtn}>
                <Text style={{color: 'white'}}>Add</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </TouchableOpacity>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    likeShop: id => dispatch(likeShop(id)),
    addToCart: (id, itemName) => dispatch(addToCart(id, itemName)),
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
