import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Button } from 'react-native'

export default function Css() {
  return (
    <SafeAreaView style={{flex:1}}>

   <View>
    <TouchableOpacity>
     <Text>Hello</Text>
    </TouchableOpacity>
   </View>
    </SafeAreaView>
  )
}