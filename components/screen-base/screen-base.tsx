import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ScreenProps} from "./interfaces"

const Screen = ({children, ...props}:ScreenProps) => {
  return (
   <SafeAreaView {...props}>
    {children}
   </SafeAreaView>
  )
}

export default Screen