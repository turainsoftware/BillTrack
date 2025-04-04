import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useRef} from 'react';
import HomeLayout from './HomeLayout';
import {DynamicHeader, ServiceItem} from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {colors, fonts} from '../../util/utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Service = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%'], []);

  const handleOpen = () => bottomSheetRef.current.expand();
  const handleClose = () => bottomSheetRef.current.close();

  const renderBackdrop = props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}></BottomSheetBackdrop>
  );
  return (
    <HomeLayout>
      <DynamicHeader
        title={'Service List'}
        icons={[
          <Octicons name="plus-circle" size={20} color={'#28A745'} />,
          <MaterialIcons
            name="playlist-add"
            size={20}
            color={colors.primary}
          />,
          <MaterialIcons
            name="headset-mic"
            size={20}
            color={colors.textSlate}
          />,
        ]}
      />
      <GestureHandlerRootView>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <AntDesign name="search1" size={16} color="#12121250" />
            <TextInput
              style={styles.inputBox}
              placeholder="Search"
              placeholderTextColor={'#12121250'}
            />
          </View>
        </View>
        <ScrollView
          style={{flex: 1, paddingHorizontal: 20, marginTop: 10}}
          contentContainerStyle={{gap: 10}}>
          <ServiceItem />
        </ScrollView>
        <BottomSheet
          snapPoints={snapPoints}
          index={1}
          ref={bottomSheetRef}
          enablePanDownToClose
          enableContentPanningGesture
          backdropComponent={renderBackdrop}
          animationConfigs={{
            duration: 400,
          }}
          backgroundStyle={{backgroundColor: colors.primaryBackground}}>
          <BottomSheetScrollView
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View style={styles.sheetHeaderContainer}>
              <Text style={styles.headerText}>Service Details</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity>
                  <Feather name="edit" size={20} color="#28A745" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="delete" size={20} color="#FF0000" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.sheetContentContainer}>
              <View style={styles.sheetContentHeader}>
                <View>
                  <Text>Mutton Biryani</Text>
                  <Text>Non Veg Item</Text>
                </View>
                <Image
                  source={require('./../../../assets/images/service.png')}
                />
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    backgroundColor: colors.primaryBackground,
  },
  searchInputContainer: {
    height: 40,
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  inputBox: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 6,
  },
  sheetHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  headerText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  sheetContentContainer: {
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    marginVertical: 20,
  },
  sheetContentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
});

export default Service;
