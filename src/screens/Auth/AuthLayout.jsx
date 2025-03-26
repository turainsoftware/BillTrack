import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('./../../../assets/images/bg1.png')}
      resizeMode="cover"
      style={styles.background}>
      <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.ballContainer}>
          <View
            style={[
              styles.ball,
              {
                alignSelf: 'flex-end',
                marginRight: -50,
              },
            ]}
          />
          <View
            style={[
              styles.ball,
              {
                marginLeft: -50,
              },
            ]}
          />
        </View>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballContainer: {
    position: 'absolute',
    height: '80%',
    width: '100%',
    zIndex: -1,
    justifyContent: 'space-between',
  },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: '#EA6B2333',
    borderRadius: 100 / 2,
  },
});

export default AuthLayout;
