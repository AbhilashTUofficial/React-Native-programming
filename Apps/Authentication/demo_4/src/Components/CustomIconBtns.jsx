import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

export default function CustomIconBtns({ btnHandler }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "80%"
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          paddingVertical: 6,
          marginVertical: 24,
          height: 46,
          width: 72,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          backgroundColor: 'transparent',
          borderColor: "white",
          borderWidth: 2,

        }}
        onPress={btnHandler}>

        <ImageBackground
          source={require("../assets/img/google_logo.png")}
          style={{ height: 30, width: 30 }} />

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          paddingVertical: 6,
          marginVertical: 24,
          height: 46,
          width: 72,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          backgroundColor: 'transparent',
          borderColor: "white",
          borderWidth: 2,

        }}
        onPress={btnHandler}>

        <ImageBackground
          source={require("../assets/img/facebook_logo.png")}
          style={{
            height: 30,
            width: 30
          }}
        />

      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          paddingVertical: 6,
          marginVertical: 24,
          height: 46,
          width: 72,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          backgroundColor: 'transparent',
          borderColor: "white",
          borderWidth: 2,

        }}
        onPress={btnHandler}>

        <ImageBackground
          source={require("../assets/img/apple_logo.png")}
          style={{
            height: 30,
            width: 30
          }} />

      </TouchableOpacity>
    </View>
  );
}
