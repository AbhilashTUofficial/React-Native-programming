import {View} from 'react-native';
import React from 'react';

const Wrapper = ({children}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
        }}></View>
      <View
        style={{
          position: 'absolute',
        }}>
        {children}
      </View>
    </View>
  );
};

export default Wrapper;
