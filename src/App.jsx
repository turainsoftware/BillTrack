import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts } from './util/utils'

const App = () => {
  return (
    <View>
      <Text style={{fontFamily: fonts.bold}}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})