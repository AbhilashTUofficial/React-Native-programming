import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import AuthScreen from './src/screens/auth_screen';
import DeliveryScreen from './src/screens/delivery_screen';
import TabController from './src/screens/tab_controller';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='authscreen' component={AuthScreen} />
          <Stack.Screen name='tabcontroller' component={TabController} />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;