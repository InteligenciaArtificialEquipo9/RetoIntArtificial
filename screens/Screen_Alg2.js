import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import NavegacionAbajo from '../components/NavegacionAbajo'


export default function ProfileScreen() {
const navigation = useNavigation()

  return (
    <>
    <ScrollView className='pt-5 h-full flex-1 bg-[#EEF1F7]'>
      <View className="items-center mt-8">
        <Text className="font-light text-xl">Algorithm 2</Text>
        <Text className="font-bold text-xl">ANN</Text>
      </View>


      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-1 pt-0 '>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Justification</Text>
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
            <Text className="font-bold text-xl">Results</Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Accuracy obtained</Text>
          </View>

          <View className='bg-gray border px-5 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/PrecisionKNN.jpeg')}
            className="h-53 w-50 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-2'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Using the KNN method we obtained an accuracy of 0.76</Text>
          </View>
        </View>
      </View>


      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Confusion Matrix</Text>
          </View>

          <View className='bg-gray border px-10 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source=
            {require('../assets/Matriz_KNN.jpeg')}

            className="h-72 w-80 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            
            <Text className='text mb-1'>Image of the Cofusion Matrix</Text>
          </View>
        </View>
      </View>
      
      <View className='bg-blue pl-2'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>ROC</Text>
          </View>

          <View className='bg-gray border px-5 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/RNC_KNN.jpeg')}
            className="h-72 w-96 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Receiver operating characteristic curve  </Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>AUC</Text>
          </View>

          <View className='bg-gray border px-8 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/AUC_KNN.jpeg')}
            className="h-53 w-50 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-32'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Area under curve</Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Kaggle score</Text>
          </View>

          <View className='bg-gray border px-20 border-gray-200 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source=
            {require('../assets/KaggleKNN.jpeg')}
            className="h-36 w-64 bg-gray-300 mt-10"/>
        </View>
      </View>

      <View className='flex-row items-center px-7 pb-40'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Score obtained when submitting the file on Kaggle</Text>
          </View>
        </View>
      </View>

      <View>

      </View>
  
    </ScrollView>
    <NavegacionAbajo screen='Alg2'/>
    </>
  )   
}