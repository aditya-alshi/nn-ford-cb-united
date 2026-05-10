import { View, Text } from 'react-native'
import React from 'react'

const Spacer = ({width = "100%", height = 10}) => {
  return (
    <View style={{ width, height }} />
  )
}

export default Spacer