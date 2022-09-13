import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import NavegacionAbajo from '../components/NavegacionAbajo';

export default function SelectionScreen() {

  const navigation = useNavigation();

  return (
    <>
    <ScrollView className='pt-5 h-full flex-1 bg-[#EEF1F7] mb-16'>
      <View className=' bg-[#EEF1F7] mb-8'>
        <View className='mt-5'>
          <Text className='font-bold text-slate-900 text-2xl text-center'>
            Selected alogrithm
          </Text>
        </View>

        <View className='mt-10 ml-5'>
          <Text className='text-justify'>
            Explanation
          </Text>
        </View>

        <View className='mt-5 items-center'>
          <Image
            source={require("../assets/t1.jpg")}
            style={{
              resizeMode: "contain",
              height: 200,
              width: 200,
            }}
          />
        </View>

        <View className='mt-5 items-center'>
          <Image
            source={require("../assets/t1.jpg")}
            style={{
              resizeMode: "contain",
              height: 200,
              width: 200,
            }}
          />
        </View>

        <View className='mt-5 ml-1'>
          <TouchableOpacity>
            <Text>Return to Home</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
    <NavegacionAbajo screen='Seleccion' />
    </>
  )
}