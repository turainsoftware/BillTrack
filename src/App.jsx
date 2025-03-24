import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Onboarding, SplashScreen} from './screens';

const App = () => {
  const Stack = createStackNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };

  const AppNav = () => {
    const isLogin = false;
    return (
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  return <AppNav />;
};

export default App;
