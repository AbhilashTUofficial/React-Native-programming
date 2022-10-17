import { lightGrey, secondary } from '../constants';

const { View, Image, Text, TouchableOpacity } = require('react-native');


const Header = () => {
    return (
        <View
            style={{

                width: "100%",
                flexDirection: "row",
                paddingTop: 20,
                backgroundColor: "white",
                alignItems: "center",
                // position: "absolute"

            }}>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 'auto'
                }}>
                <View
                    style={{
                        width: 26,
                        height: 26,
                        margin: 6,
                    }}>

                    <Image
                        source={require('../assets/icons/previous.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: secondary,
                        letterSpacing: 1,
                    }}
                >Restaurant</Text>

            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 0.4,
                    borderColor: lightGrey,
                    borderRadius: 30,
                    height: 36,
                    width: 140,
                    paddingHorizontal: 4
                }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        marginVertical: 6,
                        marginHorizontal: 6
                    }}>

                    <Image
                        source={require('../assets/icons/search.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            alignSelf: "center",
                        }} />
                </View>
                <Text
                    style={{
                        marginHorizontal: 2,
                    }}>Search menu</Text>
            </View >
            <TouchableOpacity

                style={{
                    alignItems: 'center',
                    padding: 8,
                    margin: 12,
                    height: 32,
                    width: 32,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderColor: lightGrey,
                    borderRadius: 99,
                    borderWidth: 0.4,

                }}
            // onPress={}
            >
                <Image
                    source={require('../assets/icons/viewmore.png')} style={{
                        height: '100%',
                        width: "100%",
                        alignSelf: "center",
                    }} />

            </TouchableOpacity>


        </View>
    );
};

export default Header;