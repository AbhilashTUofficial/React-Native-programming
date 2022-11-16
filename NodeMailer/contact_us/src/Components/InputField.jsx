import { StyleSheet, TextInput, View } from 'react-native';
import { primary } from '../constants';


const InputField = (props) => {
    return (
        <View style={inputFieldStyles.cont}>
            <TextInput {...props} placeholderTextColor={"grey"} />
        </View>
    );
};

export default InputField;


const inputFieldStyles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        height: 46,
        borderColor: primary,
        borderWidth: 0.8,
        borderRadius: 6,
        paddingHorizontal: 8,
        marginBottom: 8,
    }
});