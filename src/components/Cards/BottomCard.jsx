import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const BottomCard = ({snapPoints, sheetRef, isEnablePanDownClose = true}) => {
  return (
    <BottomSheet
      ref={sheetRef}
    //   index={-1} // This keeps it closed initially
      snapPoints={snapPoints}
      enablePanDownToClose={isEnablePanDownClose}
      animateOnMount={true}
      topInset={0}
      style={{zIndex: 1000}}>
      <BottomSheetView>
        <Text>Helloworld</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomCard;

const styles = StyleSheet.create({});
