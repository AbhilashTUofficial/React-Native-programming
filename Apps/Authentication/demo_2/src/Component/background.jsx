import { View } from 'react-native';
import React from 'react';

const Background = ({ children }) => {
  return (
    <View>
      <View style={{ height: "100%", width: "100%", backgroundColor: "#F8F8F8" }} />
      <View style={{ position: 'absolute' }}>{children}</View>
    </View>
  );
};

export default Background;
