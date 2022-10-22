import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { darkGrey, lightGrey, secondary } from '../constants';


const RestaurantDetails = () => {
    return (
        <View
            style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: 226,
                alignItems: "center",
                backgroundColor: "#F6F5FA",
                paddingBottom: 6,
            }}>
            <Image source={require('../assets/img/fireworks.jpg')}
                style={{
                    height: '100%',
                    width: "100%",
                    alignSelf: "center",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                }} />
            <View
                style={{
                    marginTop: 18,
                    height: 190,
                    width: "94%",
                    backgroundColor: "white",
                    position: "absolute",
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    justifyContent: "space-evenly"

                }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                    <View>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: "500",
                            color: secondary
                        }}>Bamboo Mess</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: secondary
                        }}>South Indian, Chinese, Arabian</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: darkGrey
                        }}>Sulthan Bathery Locality, Sulthan Bathery</Text>



                    </View>

                    <Ratting />

                </View>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                            letterSpacing: 1,
                        }}>30 min   |   1 km away   |   Flat $14 delivery charge on order above $99</Text>

                    </ScrollView>
                </View>
                <CouponsScrollView />

            </View>
        </View>
    );
};

export default RestaurantDetails;

const Ratting = () => {
    return (
        <View
            style={{
                width: 60,
                height: 60,
                borderRadius: 12,
                borderColor: lightGrey,
                borderWidth: 1,
                overflow: 'hidden'
            }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "gold",
                }}>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        flexDirection: 'row'
                    }}>
                    <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>3.0 </Text>

                    <View
                        style={{
                            width: 14,
                            height: 14
                        }}>
                        <Image
                            source={require('../assets/icons/star.png')}
                            style={{
                                height: '100%',
                                width: "100%",
                                alignSelf: "center",
                            }} />
                    </View>

                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white"
                }}>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "bold"
                        }}>52</Text>
                    <Text
                        style={{
                            fontSize: 10,
                            fontWeight: "bold"
                        }}>Reviews</Text>

                </View>
            </View>
        </View>
    );
};

const CouponsScrollView = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                marginVertical: 16
            }}>
            <Coupon />
            <Coupon />
            <Coupon />
            <Coupon />
        </ScrollView>
    );
};

const Coupon = () => {
    return (
        <View
            style={{
                height: 60,
                width: 160,
                marginRight: 16,
                backgroundColor: "lightblue"
            }}
        ></View>
    );
};