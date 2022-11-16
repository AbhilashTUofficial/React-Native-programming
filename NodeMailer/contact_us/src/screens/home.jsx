import { StyleSheet, View } from 'react-native';
import ContactUsBtn from '../Components/CustomBtn';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();

    const navigateHandler = () => {
        navigation.navigate("contactus");
    };
    return (
        <View style={homeStyle.cont}>
            <Header title={"Home"} canGoBack={false} />
            <ContactUsBtn text={"Contact Us"} handler={navigateHandler} />
        </View>
    );
};

export default Home;


const homeStyle = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        paddingVertical: 32,
        paddingHorizontal: 16,
        height: "100%",

    }
});
