import { Dimensions, Image, Text, View } from 'react-native';
import { darkGrey, lightGrey, secondary } from '../constants';


const RestaurantDetails = () => {
    return (
        <View
            style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: 226,
                alignItems: "center",
                backgroundColor: "#F6F5FA"

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

                }}>
                <View
                    style={{
                        flex: 1,
                        padding: 16,
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
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "500",
                        }}>30 min | 1 km away | Flat $14 delivery charge</Text>
                    </View>

                    <View
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12,
                            borderColor: lightGrey,
                            borderWidth: 1,

                        }}>

                    </View>

                </View>
                <View
                    style={{
                        flex: 1,
                        padding: 16,
                        flexDirection: 'row',
                    }}>
                    <View
                        style={{
                            height: 60,
                            width: 160,
                            marginRight: 16,
                            backgroundColor: "lightblue"
                        }}
                    ></View>
                    <View
                        style={{
                            height: 60,
                            width: 160,
                            marginRight: 16,
                            backgroundColor: "lightblue"
                        }}
                    ></View>

                </View>

            </View>
        </View>
    );
};

export default RestaurantDetails;