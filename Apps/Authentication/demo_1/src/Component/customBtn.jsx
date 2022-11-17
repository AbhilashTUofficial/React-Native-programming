import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';

export default function CustomBtn({ bgColor, label, textColor, btnHandler, props }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.8,
        paddingVertical: 4,
        marginVertical: 16,
      }}
      onPress={btnHandler}
    >
      <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>{label}</Text>
    </TouchableOpacity>
  );
}
