import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import HomeLayout from './HomeLayout';
import {CustomerCard, SecondaryHeader} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, fonts} from '../../util/utils';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Customer = () => {
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

  // Items
  const filterOptions = [
    {
      label: 'Customer name – A to Z',
      icon: (
        <FontAwesome5 name="sort-alpha-down" size={14} color={colors.primary} />
      ),
    },
    {
      label: 'Customer name – Z to A',
      icon: (
        <FontAwesome5 name="sort-alpha-up" size={14} color={colors.primary} />
      ),
    },
    {
      label: 'Amount – Low to High',
      icon: (
        <FontAwesome5
          name="sort-amount-up-alt"
          size={14}
          color={colors.primary}
        />
      ),
    },
    {
      label: 'Amount – High to Low',
      icon: (
        <FontAwesome5
          name="sort-amount-down-alt"
          size={14}
          color={colors.primary}
        />
      ),
    },
    {
      label: 'Amount status – Due',
      icon: (
        <FontAwesome6
          name="money-bill-transfer"
          size={14}
          color={colors.primary}
        />
      ),
    },
    {
      label: 'Amount status – Recieved',
      icon: (
        <FontAwesome6
          name="money-bill-trend-up"
          size={14}
          color={colors.primary}
        />
      ),
    },
  ];

  // State Variables
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <HomeLayout>
      <SecondaryHeader title={'Customer List'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <AntDesign name="search1" size={16} color="#12121250" />
            <TextInput
              style={styles.inputBox}
              placeholder="Search"
              placeholderTextColor={'#12121250'}
            />
          </View>
          <TouchableOpacity style={styles.sliderContainer} onPress={handleOpen}>
            <FontAwesome6 name="sliders" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}
          contentContainerStyle={{gap: 10}}
          showsVerticalScrollIndicator={false}>
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </ScrollView>
        <BottomSheet
          snapPoints={snapPoints}
          index={-1}
          ref={bottomSheetRef}
          enablePanDownToClose
          enableContentPanningGesture
          backdropComponent={renderBackdrop}
          animationConfigs={{
            duration: 400,
          }}
          backgroundStyle={{backgroundColor: colors.primaryBackground}}>
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Text style={styles.titleText}>Filter & Sort</Text>
            <View style={styles.sheetHeaderContainer}>
              <Text style={styles.sheetHeadeTitleText}>Sort By</Text>
              <TouchableOpacity style={styles.sheetHeaderRightContainer}>
                <Entypo name="cross" size={15} color="#007CFF" />
                <Text style={styles.sheetHeaderRightText}>Clear</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
              }}>
              {filterOptions.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity
                    style={styles.sheetContentContainer}
                    onPress={() => setSelectedFilter(index)}>
                    <View style={styles.sheetContentLeftContainer}>
                      {item.icon}
                      <Text style={styles.lableText}>{item.label}</Text>
                    </View>
                    <View
                      style={[
                        styles.sheetSelectedContainer,
                        selectedFilter === index && {
                          borderColor: colors.primary,
                        },
                      ]}>
                      {selectedFilter === index && (
                        <View
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 10 / 2,
                            backgroundColor: colors.primary,
                          }}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  {filterOptions.length - 1 !== index && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.applyBtn} onPress={handleClose}>
              <Text style={styles.applyText}>APPLY</Text>
            </TouchableOpacity>
          </BottomSheetScrollView>
        </BottomSheet>
      </GestureHandlerRootView>
    </HomeLayout>
  );
};

export default Customer;

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
    width: '85%',
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
  sliderContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  container: {
    flex: 1,
  },
  titleText: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
  sheetHeaderContainer: {
    height: 40,
    backgroundColor: '#EA6B2320',
    marginVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetHeaderRightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  sheetHeadeTitleText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: '#000000',
  },
  sheetHeaderRightText: {
    color: '#007CFF',
    fontSize: 12,
    fontFamily: fonts.medium,
  },
  applyBtn: {
    width: 120,
    height: 40,
    backgroundColor: colors.primary,
    // paddingHorizontal: 10,
    // paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 30,
  },
  applyText: {
    fontSize: 12,
    fontFamily: fonts.bold,
    color: '#ffffff',
    letterSpacing: 1,
  },
  sheetContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sheetSelectedContainer: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#C3C3C3',
    borderRadius: 16 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContentLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#DCDCDC',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  lableText: {
    fontSize: 13,
    fontFamily: fonts.medium,
    color: colors.textSlate,
  },
});
