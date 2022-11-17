import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function CustomBtn({ label, textColor, btnHandler, props }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: 6,
        marginVertical: 24,
      }}
      onPress={btnHandler}
    >

      <LinearGradient
        colors={["#F05F00", "#F18900"]}
        style={{
          height: "120%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30
        }}>
        <Text style={{ color: textColor, fontSize: 24, fontWeight: "bold" }}>{label}</Text>

      </LinearGradient>
    </TouchableOpacity>
  );
}
