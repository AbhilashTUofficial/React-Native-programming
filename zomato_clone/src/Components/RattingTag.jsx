import { Image, StyleSheet, Text, View } from "react-native";



const RattingTag = (props) => {

    //? ratting colors on ratting tag.
    //? white : 0 ★
    //? red   : 1 ★
    //? tomato: 2 ★
    //? gold  : 3 ★
    //? green : 4 ★
    //? green : 5 ★
    const rattingColors = [
        "white",
        "red",
        "tomato",
        "gold",
        "#24963F",
        "#24963F",
    ];
    const ratting = props.ratting;
    var rate = props.ratting.substring(0, 1);
    const rattingIcon = require('../assets/icons/star.png');


    return (
        <View style={[RattingTagStyles.ratting,
        { backgroundColor: rattingColors[rate] }]} >

            <View style={RattingTagStyles.rattingTag}>

                <Text style={RattingTagStyles.rattingText}>
                    {ratting}</Text>

                <Image source={rattingIcon}
                    style={RattingTagStyles.rattingIcon} />

            </View>

        </View>
    );
};

export default RattingTag;

//? Styles

const RattingTagStyles = StyleSheet.create({
    ratting: {
        height: 16,
        width: 34,
        borderRadius: 4,
        alignItems: "center"
    },
    rattingText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
    },
    rattingTag: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%"
    },
    rattingIcon: {
        width: 10,
        height: 10,
        alignSelf: "center",
    },
});