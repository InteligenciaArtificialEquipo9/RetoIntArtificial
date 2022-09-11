import { View, Text } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';

export default function PredictionScreen() {
  return (
    <View className='p-8 flex-1 bg-white'>
      <Text className='text-3xl text-bold mt-4'>¿Sobrebvivirías?</Text>
      <Text className='text-lg text-gray-700'>Ingresa tus datos y te daremos la respuesta</Text>
      <ArrowLeftIcon></ArrowLeftIcon>
    </View>
  )
}