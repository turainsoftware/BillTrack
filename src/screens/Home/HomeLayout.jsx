import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../util/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeLayout = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primaryBackground,
        paddingTop: Platform.OS === 'android' ? insets.top : 0,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeLayout;
