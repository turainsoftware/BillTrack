import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AuthHome,
  CreateBill,
  Customer,
  Home,
  Login,
  Menu,
  Onboarding,
  Otp,
  Service,
  SplashScreen,
} from './screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from './util/utils';
import {Pressable, View} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="AuthHome" component={AuthHome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'shift',
          headerShown: false,
          tabBarStyle: {
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: fonts.medium,
            marginTop: 1,
          },
          tabBarItemStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarActiveTintColor: colors.primary,
        }}
        backBehavior="history">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color={color} />
            ),
            tabBarButton: props => (
              <Pressable
                {...props}
                android_ripple={{color: `${colors.primary}40`}} // Custom ripple color
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Customer"
          component={Customer}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person-search" size={24} color={color} />
            ),
            tabBarButton: props => (
              <Pressable
                {...props}
                android_ripple={{color: `${colors.primary}40`}} // Custom ripple color
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CreateBill"
          component={CreateBill}
          options={{
            tabBarIcon: ({color}) => (
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2, // 50% of 60
                  backgroundColor: '#FF0000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  marginBottom: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 4,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 6,
                  elevation: 8,
                }}>
                <MaterialCommunityIcons
                  name="playlist-edit"
                  size={28}
                  color="white" // Changed to white for better contrast
                />
              </View>
            ),
            tabBarLabel: '',
            tabBarButton: props => (
              <Pressable {...props} android_ripple={null} />
            ),
          }}
        />
        <Tab.Screen
          name="Service"
          component={Service}
          options={{
            tabBarIcon: ({color}) => (
              <Octicons name="stack" size={24} color={color} />
            ),
            tabBarButton: props => (
              <Pressable
                {...props}
                android_ripple={{color: `${colors.primary}40`}} // Custom ripple color
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({color}) => (
              <Octicons name="three-bars" size={24} color={color} />
            ),
            tabBarButton: props => (
              <Pressable
                {...props}
                android_ripple={{color: `${colors.primary}40`}}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const AppNav = () => {
    const isLogin = true;
    return (
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };

  return <AppNav />;
};

export default App;