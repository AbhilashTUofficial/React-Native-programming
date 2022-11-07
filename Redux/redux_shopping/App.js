import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home_screen';
import CartScreen from './src/screens/cart_screen';
import ShopViewScreen from './src/screens/shop_view_screen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="homescreen" component={HomeScreen} />
            <Stack.Screen name="cartscreen" component={CartScreen} />
            <Stack.Screen name="shopviewscreen" component={ShopViewScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
