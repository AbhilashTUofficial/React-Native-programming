import { ImageBackground, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeliveryScreen from "./delivery_screen";
import { darkGrey, lightGrey, primary, secondary } from "../constants";


const Tab = createBottomTabNavigator();

const delivery = "Delivery";
const money = "Money";
const zomaland = "Zomaland";
const history = "History";





function TabController() {
    return (
        <Tab.Navigator
            initialRouteName={delivery}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    paddingTop: 10,
                    height: 58
                },
                tabBarActiveTintColor: secondary,
                tabBarInactiveTintColor: darkGrey,
                tabBarLabelStyle: {
                    paddingBottom: 10,
                    paddingTop: 6,
                    fontSize: 12,
                    fontWeight: "500"
                },
                tabBarIcon: ({ focused }) => {
                    let icon = '../assets/icons/google_logo.png';
                    let current = route.name;

                    if (current === delivery) {
                        if (focused) {
                            return <TabIcon source={require('../assets/icons/delivery_active.png')} />;
                        }
                        return <TabIcon source={require('../assets/icons/delivery_inactive.png')} />;
                    } else if (current === money) {
                        if (focused) {
                            return <TabIcon source={require('../assets/icons/money_active.png')} />;
                        }
                        return <TabIcon source={require('../assets/icons/money_inactive.png')} />;
                    }
                    else if (current === zomaland) {
                        if (focused) {
                            return <TabIcon source={require('../assets/icons/zomaland_active.png')} />;
                        }
                        return <TabIcon source={require('../assets/icons/zomaland_inactive.png')} />;
                    }
                    else if (current === history) {
                        if (focused) {
                            return <TabIcon source={require('../assets/icons/history_active.png')} />;
                        }
                        return <TabIcon source={require('../assets/icons/history_inactive.png')} />;
                    }
                },
            })}>

            <Tab.Screen name={delivery} component={DeliveryScreen} />
            <Tab.Screen name={money} component={DeliveryScreen} />
            <Tab.Screen name={zomaland} component={DeliveryScreen} />
            <Tab.Screen name={history} component={DeliveryScreen} />

        </Tab.Navigator>
    );
}

export default TabController;


const TabIcon = (props) => {
    return (
        <View
            style={{
                width: 30,
                height: 30
            }}>

            <ImageBackground
                {...props}
                style={{
                    height: '100%',
                    width: "100%",
                    alignSelf: "center",
                }} />
        </View>

    );
};