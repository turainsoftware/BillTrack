import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../util/utils';
import {useNavigation} from '@react-navigation/native';

const SecondaryHeader = ({title}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={handleBack}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="arrow-back" size={25} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <MaterialIcons name="headset-mic" size={20} color={colors.textSlate} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: '#000000',
  },
});

export default SecondaryHeader;
