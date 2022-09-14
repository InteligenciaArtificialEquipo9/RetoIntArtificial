import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import NavegacionAbajo from '../components/NavegacionAbajo'


export default function ProfileScreen() {

  return (
    <>
    <ScrollView className='pt-5 h-full flex-1 bg-[#EEF1F7]'>
      <View className='mb-24'>
      <View className="items-center mt-8">
        <Text className="font-light text-2xl">Algorithm 1</Text>
        <Text className="font-bold text-2xl">ANN</Text>
      </View>


      <View className='bg-blue pl-2 m-4 pb-4 bg-[#dfdee8] rounded-md shadow-sm'>
        <View> 
          <View className='pl-2 pb-1 pt-0'>
            <Text>&emsp;</Text>
            <Text className="font-bold text-xl">Justification</Text>
          </View>
          <View className='flex-row items-center px-7'>
            <Text>&emsp;</Text>
            <Text className='text-base mb-1'>We choose this algorithm because the team thought Artificial neural network was a really interesting method. We also decided to select it as one of the two methods because of the advantages it offered:{"\n"}
            ► Storing information on the entire network: Information such as in traditional programming is stored on the entire network, not on a database. The disappearance of a few pieces of information in one place does not prevent the network from functioning.{"\n"}
            ► Ability to work with incomplete knowledge: After ANN training, the data may produce output even with incomplete information. The loss of performance here depends on the importance of the missing information. {"\n"}
            ► Having fault tolerance: Corruption of one or more cells of ANN does not prevent it from generating output. This feature makes the networks fault tolerant. {"\n"}
            ► Ability to make machine learning: Artificial neural networks learn events and make decisions by commenting on similar events. {"\n"}
            {"\n"}
            We knew it held disadvantages such as: {"\n"}
            ► The duration of the network being unknown: The  network is reduced to a certain value of the error on the sample means that the training has been completed. But taking into consideration all the benefits of method we believe it was a good decision
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
            source={require('../assets/PrecisionANN.jpeg')}
            className="h- w-50 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-2'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Using the ANN method we obtained an accuracy of 0.86</Text>
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
            source={require('../assets/MatrizConfANN.jpeg')}
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
            source={require('../assets/ROC_ANN.jpeg')}     
            className="h-60 w-80 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-10'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Receiver operating characteristic curve </Text>
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
            source=
              {require('../assets/AUC_ANN.jpeg')}
            className="h-7 w-96 bg-gray-300 mt-10"/>
        </View>
      </View>

          <View className='flex-row items-center px-32'>
            <Text>&emsp;</Text>
            <Text className='text mb-1'>Area under curve </Text>
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
              {require('../assets/KaggleScoreANN.jpeg')}
              
              className="h-20 w-80 bg-gray-300 mt-10"/>
          </View>
        </View>

        <View className='flex-row items-center px-7'>
          <Text>&emsp;</Text>
          <Text className='text mb-1'>Score obtained when submitting the file to Kaggle</Text>
        </View>
      </View>
      </View>

      <View>

      </View>
      </View>
    </ScrollView>
    <NavegacionAbajo screen='Alg1'/>
    </>
  )   
}