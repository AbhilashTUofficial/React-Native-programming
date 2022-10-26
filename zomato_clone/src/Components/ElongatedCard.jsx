import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';

const favIcon = require('../assets/icons/heart_active.png');
const notFavIcon = require('../assets/icons/heart_inactive.png');
const clockIcon = require('../assets/icons/clockicon.png');
const rupeeIcon = require('../assets/icons/rupeeicon.png');

const rattingColors = [
    "white",
    "red",
    "tomato",
    "gold",
    "#24963F",
    "#24963F",
];

const rattingIcon = require('../assets/icons/star.png');

const ElongatedCard = (props) => {

    const navigation = useNavigation();
    var ratting = props.restaurant.ratting.substring(0, 1);
    const [faved, setFav] = useState(false);


    return (

        <TouchableOpacity activeOpacity={0.8} style={ElongatedCardStyles.card}
            onPress={() => navigation.navigate("restaurantscreen", props.restaurant)}>

            <View style={ElongatedCardStyles.header}>

                <Image source={props.restaurant.img} style={ElongatedCardStyles.img} />

                <TouchableOpacity activeOpacity={0.6} style={ElongatedCardStyles.favBtn}
                    onPress={() => { setFav(!faved); }} >

                    <Image source={faved ? favIcon : notFavIcon} style={ElongatedCardStyles.favIcon} />

                </TouchableOpacity>

            </View>

            <View style={ElongatedCardStyles.body}>

                <View style={ElongatedCardStyles.titleCont}>

                    <Text style={ElongatedCardStyles.titleText}>
                        {props.restaurant.storeName}</Text>

                    <View style={[ElongatedCardStyles.ratting,
                    { backgroundColor: rattingColors[ratting] }]} >

                        <View style={ElongatedCardStyles.rattingTag}>

                            <Text style={ElongatedCardStyles.rattingText}>
                                {props.restaurant.ratting}</Text>

                            <Image source={rattingIcon}
                                style={ElongatedCardStyles.rattingIcon} />

                        </View>

                    </View>

                </View>

                <View style={ElongatedCardStyles.resDetails}>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Image style={ElongatedCardStyles.smIcon} source={clockIcon} />

                        <Text style={ElongatedCardStyles.resText}>
                            {props.restaurant.travelTime} </Text>

                        <Text style={ElongatedCardStyles.resText}>
                            . {props.restaurant.distance}</Text>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: "center" }}>

                        <Image style={ElongatedCardStyles.smIcon} source={rupeeIcon} />

                        <Text style={ElongatedCardStyles.resText}>
                            {props.restaurant.cost}</Text>

                    </View>

                    <Text style={ElongatedCardStyles.resText}>
                        {props.restaurant.items}</Text>

                </View>

            </View>

        </TouchableOpacity >
    );
};

export default ElongatedCard;

const ElongatedCardStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 250,
        width: 154,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 6,
        borderRadius: 18,
        backgroundColor: "white",
        elevation: 4,
        borderRadius: 12,
        shadowColor: secondary,
        shadowOffset: { height: 3, width: 3 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    header: {
        alignItems: 'center',
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    favBtn: {
        width: 24,
        height: 24,
        padding: 4,
        borderRadius: 99,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        top: 6,
        right: 6
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
    },
    body: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        paddingTop: 6,
        paddingLeft: 6,
        paddingRight: 6,
    },
    titleCont: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    titleText: {
        color: secondary,
        fontWeight: "500",
        marginVertical: 2,
    },
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
    resDetails: {
        marginVertical: 2,
        marginHorizontal: 2,
        height: "50%",
    },
    resText: {
        fontWeight: "400",
        marginVertical: 2,
        fontSize: 14,
    },
    smIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    }
});