import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import CustomBtn from '../Component/customBtn';
import { darkGreenColor, greenColor } from '../constants';

const HomeScreen = () => {
  return (
    <Background>
      <View style={{
        display: "flex",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: "center",
        alignItems: "center"
      }}>

        <Text style={{
          color: 'white',
          fontSize: 64,
          marginBottom: 60
        }}>
          HOME</Text>


      </View>
    </Background>
  );
};

export default HomeScreen;
