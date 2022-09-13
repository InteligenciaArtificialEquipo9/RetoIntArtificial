import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import NavegacionAbajo from '../components/NavegacionAbajo'


export default function ProfileScreen() {

  return (
    <>
    <ScrollView className='pt-5 h-full flex-1 bg-[#EEF1F7]'>
      <View className="items-center mt-8">
        <Text className="font-light text-xl">Algoritmo 1</Text>
        <Text className="font-bold text-xl">KNN</Text>
      </View>


      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-1 pt-0 '>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Justificación</Text>
          </View>
          <View className='flex-row items-center px-7'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>We choose this alg cause after carefully reading all the advantages
            and disadvantages from each of the models we ... write more info here </Text>
          </View>
        </View>
      </View>


      <View className='pl-3'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Resultados</Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Precisión obtenida</Text>
          </View>

          <View className='bg-gray border px-32 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={{
              uri: 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'
            }} 
            className="h-20 w-40 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-7'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Pequeña descripción de la precisión obtenida </Text>
          </View>
        </View>
      </View>


      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Matriz de confusión</Text>
          </View>

          <View className='bg-gray border px-32 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={{
              uri: 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'
            }} 
            className="h-20 w-40 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-7'>
            <Text>&emsp;</Text>
            
            <Text className='text mb-1'>Pequeña descripción de la Matriz de confusión  </Text>
          </View>
        </View>
      </View>
      
      <View className='bg-blue pl-2'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>ROC</Text>
          </View>

          <View className='bg-gray border px-32 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={{
              uri: 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'
            }} 
            className="h-20 w-40 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Pequeña descripción de ROC </Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>AUC</Text>
          </View>

          <View className='bg-gray border px-32 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={{
              uri: 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'
            }} 
            className="h-20 w-40 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Pequeña descripción de AUC </Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Puntaje obtenido en Kaggle</Text>
          </View>

          <View className='bg-gray border px-32 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={{
              uri: 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg'
            }} 
            className="h-20 w-40 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-7 pb-40'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Pequeña descripción del puntaje en Kaggle </Text>
          </View>
        </View>
      </View>

      <View>

      </View>
  
    </ScrollView>
    <NavegacionAbajo screen='Alg1'/>
    </>
  )   
}