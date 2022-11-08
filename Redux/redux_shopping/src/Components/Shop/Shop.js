import {React, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {likeShop, loadCurrentShop} from '../../redux/Shopping/shopping-actions';
import {connect} from 'react-redux';

const Shop = ({shopData, likeShop, loadCurrentShop}) => {
  const navigation = useNavigation();
  const shopId = shopData.id;
  const shopName = shopData.title;
  const shopImage = shopData.image;
  const shopDesc = shopData.description;
  const itemCount = shopData.items.length;
  const [liked, setLike] = useState(shopData.liked);

  const likeHandler = () => {
    setLike(!liked);
    likeShop(shopId);
    console.log(shopData);
  };
  const viewShopHandler = () => {
    loadCurrentShop(shopData);
    navigation.navigate('shopviewscreen');
  };
  return (
    <TouchableOpacity
      onPress={viewShopHandler}
      activeOpacity={0.9}
      style={style.shopCard}>
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
        <TouchableOpacity activeOpacity={1} style={style.circularBtn}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {itemCount}
          </Text>
        </TouchableOpacity>
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
                ? require('../../assets/icons/heart_active.png')
                : require('../../assets/icons/heart_inactive.png')
            }
          />
        </TouchableOpacity>
      </View>
      <Text style={style.shopTitle}>{shopName}</Text>
      <Text>{shopDesc}</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadCurrentShop: id => dispatch(loadCurrentShop(id)),
    likeShop: id => dispatch(likeShop(id)),
  };
};

export default connect(null, mapDispatchToProps)(Shop);

const style = StyleSheet.create({
  shopCard: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 80,
    marginVertical: 8,
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
});
