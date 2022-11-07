import {React} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const ShopView = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={style.shopCard}>
      <View style={style.shopCont}>
        <View style={style.imgCont}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../assets/img/chickencurry.jpg')}
          />
        </View>

        <TouchableOpacity activeOpacity={0.9} style={style.circularBtn}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../assets/icons/heart_active.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.shopTitle}>Shop Name</Text>

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
  );
};

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

export default ShopView;
