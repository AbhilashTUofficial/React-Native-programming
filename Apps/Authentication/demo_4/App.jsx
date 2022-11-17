import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import LogInScreen from './src/Screens/loginScreen';
import SignUpScreen from './src/Screens/signupScreen';
import ForgotPasswordScreen from './src/Screens/forgotPasswordScreen';
import ResetPasswordScreen from './src/Screens/resetPasswordScreen';
import EnterOTPScreen from './src/Screens/verifyOTPScreen';

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
          <Stack.Screen name="login" component={LogInScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
          <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="resetpassword" component={ResetPasswordScreen} />
          <Stack.Screen name="enterotp" component={EnterOTPScreen} />


        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
