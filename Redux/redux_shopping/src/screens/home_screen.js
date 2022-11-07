import {React} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Shops from '../Components/Shop/Shops';

const HomeScreen = props => {
  return (
    <>
      <View style={style.header}>
        <Text style={style.text}>Home</Text>
        <Text style={style.text}>Shops</Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('cartscreen')}>
          <Text style={style.text}>Cart(0)</Text>
        </TouchableOpacity>
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
