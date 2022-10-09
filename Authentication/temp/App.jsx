import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import LogInScreen from './src/Screens/loginScreen';
import { primary } from './src/constants';
import SignUpScreen from './src/Screens/signupScreen';
import ForgotPasswordScreen from './src/Screens/forgotPasswordPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="signup" component={SignUpScreen} />

          <Stack.Screen name="login" component={LogInScreen} />
          {/* <Stack.Screen
            name="forgotpassword"
            component={ForgotPasswordScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
