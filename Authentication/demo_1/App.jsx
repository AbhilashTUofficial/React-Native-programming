import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/homeScreen';
import LogInScreen from './src/Screens/loginScreen';
import SignUpScreen from './src/Screens/signupScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={LogInScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
