import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const Header = ({ title, canGoBack }) => {
    return (
        <View style={headerStyle.cont}>
            {canGoBack ? <BackBtn /> : <View />}
            <Text style={headerStyle.title}>{title}</Text>
            <View></View>
        </View>
    );
};

export default Header;

const BackBtn = () => {

    const backIcon = require("../assets/icons/back_icon.png");
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
            style={headerStyle.backBtn}>
            <Image style={headerStyle.backIcon}
                source={backIcon} />
        </TouchableOpacity>
    );
};

const headerStyle = StyleSheet.create({
    cont: {
        width: "100%",
        height: 60,
        flexDirection: 'row',
        alignItems: "center"
    },
    backBtn: {
        width: 42,
        height: 42,
        elevation: 2,
        backgroundColor: "white",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    backIcon: {
        width: 32,
        height: 32,
    },
    title: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 22,
        fontWeight: '500',

    }
});
