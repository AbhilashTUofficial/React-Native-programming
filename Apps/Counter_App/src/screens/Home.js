import {Component, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {incrementCount, decrementCount} from '../redux/actions/countAction';

const Home = () => {
  const dispatch = useDispatch();

  //! I have no idea whats happening here
  const count = useSelector(obj => obj.count.count);

  const add = () => {
    dispatch(incrementCount());
  };

  const sub = () => {
    dispatch(decrementCount());
  };

  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>{count}</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.subBtnStyle} onPress={sub}>
          <Text style={styles.btnTextStyle}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addBtnStyle} onPress={add}>
          <Text style={styles.btnTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(45,45,45)',
  },

  textStyle: {
    margin: 20,
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  addBtnStyle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    marginTop: 8,
    marginLeft: 1,
  },
  subBtnStyle: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    marginTop: 8,
    marginRight: 1,
  },

  btnTextStyle: {
    fontSize: 32,
    color: '#ffffff',
  },
});
