import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { secondary } from '../constants';

const rattingColors = [
    "white",
    "red",
    "tomato",
    "gold",
    "#24963F",
    "#24963F",
];

const rattingIcon = require('../assets/icons/star.png');
const favIcon = require('../assets/icons/heart_active.png');
const notFavIcon = require('../assets/icons/heart_inactive.png');

const RestaurantCard = (props) => {

    const img = props.restaurant.img;
    const storeName = props.restaurant.storeName;
    const items = props.restaurant.items;
    const cost = props.restaurant.cost;
    const travelTime = props.restaurant.travelTime;
    const distance = props.restaurant.distance;
    var ratting = props.restaurant.ratting.substring(0, 1);
    const [faved, setFav] = useState(false);
    const navigation = useNavigation();

    return (

        <TouchableOpacity activeOpacity={0.8} style={RestaurantCardStyles.card}
            onPress={() => navigation.navigate("restaurantscreen", props.restaurant)}>

            <View style={RestaurantCardStyles.header}>

                <Image source={img} style={RestaurantCardStyles.img} />

                <TouchableOpacity activeOpacity={0.6} style={RestaurantCardStyles.favBtn}
                    onPress={() => { setFav(!faved); }} >

                    <Image source={faved ? favIcon : notFavIcon} style={RestaurantCardStyles.favIcon} />

                </TouchableOpacity>

                <View style={RestaurantCardStyles.disTime}>

                    <Text style={RestaurantCardStyles.disTimeText}>{travelTime} </Text>

                    <Text style={RestaurantCardStyles.disTimeText}>| {distance}</Text>

                </View>

            </View>

            <View style={RestaurantCardStyles.body}>

                <View style={RestaurantCardStyles.titleCont}>

                    <Text style={RestaurantCardStyles.titleText}>
                        {storeName}</Text>

                    <View style={[RestaurantCardStyles.ratting,
                    { backgroundColor: rattingColors[ratting] }]} >

                        <View style={RestaurantCardStyles.rattingTag}>

                            <Text style={RestaurantCardStyles.rattingText}>
                                {props.restaurant.ratting}</Text>

                            <Image source={rattingIcon}
                                style={RestaurantCardStyles.rattingIcon} />

                        </View>

                    </View>
                </View>
                <View
                    style={RestaurantCardStyles.resDetails}>
                    <Text style={RestaurantCardStyles.resText}>{items}</Text>
                    <Text style={RestaurantCardStyles.resText}>{cost}</Text>
                </View>

            </View>
        </TouchableOpacity>

    );

};

export default RestaurantCard;

const RestaurantCardStyles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 280,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12,
        marginVertical: 12,
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
        flex: 5,
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
    body: {
        flex: 2,
        width: "100%",
        alignItems: "flex-start",
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
    },
    resDetails: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
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
        fontSize: 20,
    },
    favBtn: {
        width: 32,
        height: 32,
        padding: 6,
        borderRadius: 99,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        top: 16,
        right: 12
    },
    favIcon: {
        height: '100%',
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
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
    resText: {
        fontWeight: "400",
        marginVertical: 2,
        fontSize: 14,
    },
    disTime: {
        height: 18,
        paddingHorizontal: 6,
        borderRadius: 2,
        backgroundColor: "white",
        position: "absolute",
        alignItems: "center",
        bottom: 12,
        right: 12,
        flexDirection: 'row',
        justifyContent: "center"
    },
    disTimeText: {
        color: secondary
    }

});