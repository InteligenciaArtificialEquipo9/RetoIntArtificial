import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Paola Fernández Gutiérrez Zamora - A01658087</Text>
      <Text>Yusdivia Molina Román - A01653120</Text>
      <Text>Miguel A. Medina R. - A01023656</Text>
      <Text>Annya Paulina Verduzco Meza - A01650668</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Selection")}
      >
        <Text>go to selection</Text>
      </TouchableOpacity>
    </View>
  )
}