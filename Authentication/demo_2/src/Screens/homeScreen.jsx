import { Dimensions } from 'react-native';
import React from 'react';
import Background from '../Component/background';
import Header from '../Component/header';

const HomeScreen = () => {
  return (
    <Background>
      <Header height={Dimensions.get('window').height * 0.7} heading={"HOME"} />

    </Background>
  );
};

export default HomeScreen;
