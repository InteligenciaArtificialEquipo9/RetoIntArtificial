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
    <View className='mb-24'>
      <View className="items-center mt-8">
        <Text className="font-light text-2xl">Algorithm 2</Text>
        <Text className="font-bold text-2xl">KNN</Text>
      </View>


      <View className='bg-blue pl-2 m-4 pb-4 bg-[#dfdee8] rounded-md shadow-sm'>
        <View> 
          <View className='pl-2 pb-1 pt-0'>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Justification</Text>
          </View>
          <View className='flex-row items-center px-7'>
            <Text>&emsp;</Text>
            <Text className='text-base mb-1'>We chose K Nearest Neighbor as one of the two algorithms to make predictions for the Titanic Data Set because, apart from being one of the algorithms seen and worked on during class, it is quite simple and easy to implement as there are not many parameters to establish, nor additional assumptions so the speed of the algorithm would not be greatly affected.{"\n"}
            It can be used for several purposes:{"\n"}
            ► Mainly used for regression, search and classification.{"\n"}
            ► The latter being specially useful for the problem that we had to solve. {"\n"}
            </Text>
          </View>
        </View>
      </View>


      <View className='pl-3 '>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Results</Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200 bg-[#dddef6] rounded-md shadow-sm pb-5 m-4'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-1 font-medium'>Accuracy obtained</Text>
          </View>

          <View className='px-8  mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/PrecisionKNN.jpeg')}
            className="h- w-50 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-2'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Using the KNN method we obtained an accuracy of 0.76</Text>
          </View>
        </View>
      </View>


      <View className='bg-blue pl-2 border-gray-200 bg-[#d0d1ef] rounded-md shadow-sm pb-5 m-4'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text>&emsp;</Text>
            <Text className='text-lg font-medium'>Confusion Matrix</Text>
          </View>

          <View className=' px-12  mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source={require('../assets/Matriz_KNN.jpeg')}
            className="h-80 w-80 bg-gray-300 mt-10 border border-[#9a9cd1]"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            
            <Text className='text mb-1'>Image of the Cofusion Matrix</Text>
          </View>
        </View>
      </View>
      
      <View className='bg-blue pl-2 bg-[#d4d5f6] rounded-md shadow-sm pb-5 m-4'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg font-medium'>ROC</Text>
          </View>

          <View className='pl-12 mt-0 '>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/RNC_KNN.jpeg')}
            className="h-60 w-80 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-20'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Receiver operating characteristic curve  </Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200 bg-[#cecff5] rounded-md shadow-sm pb-5 m-4'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2 font-medium'>AUC</Text>
          </View>

          <View className='px-0'>
        <View className='flex-row items-center'>
        <Image
            source= {require('../assets/AUC_KNN.jpeg')}
            className="h-16 w-96 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-32'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Area under curve</Text>
          </View>
        </View>
      </View>

      <View className='bg-blue pl-2 border-gray-200 bg-[#cecff5] rounded-md shadow-sm m-4'>
        <View> 
          <View className='pl-2 pb-3 pt-0 '>
            <Text>&emsp;</Text>
            <Text className='text-lg mb-2'>Kaggle score</Text>
          </View>

          <View className='px-10 mt-0 '>
          <View className='flex-row items-center'>
          <Image
              source=
              {require('../assets/KaggleKNN.jpeg')}
              className="h-36 w-64 bg-gray-300 mt-10"/>
          </View>
        </View>

        <View className='flex-row items-center px-7'>
          <Text>&emsp;</Text>
          <Text className='text mb-1'>Score obtained when submitting the file on Kaggle</Text>
        </View>
        </View>
      </View>

      <View>

      </View>
    </View>
    </ScrollView>
    <NavegacionAbajo screen='Alg2'/>
    </>
  )   
}