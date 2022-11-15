import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import Home from './src/screens/home';
import ContactUs from './src/screens/contact_us';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      {/* StatusBar translucent make it, that the UI goes under status bar */}
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {
            /* Screens */
            //TODO: Need to add splash screen in here
          }

          <Stack.Screen name="home" component={Home} />

          <Stack.Screen name="contactus" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
