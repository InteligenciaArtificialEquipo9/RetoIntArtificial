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
          <Text className='font-bold text-slate-900 text-xl text-center'>
            KNN
          </Text>
        </View>

        <View className='mt-10 ml-5'>
          <Text className='text-justify text-xl font-bold'>
            Explanation
          </Text>
        </View>
        <Text className='text-base pr-4 pl-4'>
        Why did we choose KNN?
        We chose K Nearest Neighbor as one of the two algorithms to make predictions for the Titanic Data Set because, apart from being one of the algorithms seen and worked on during class, it is quite simple and easy to implement as there are not many parameters to establish, nor additional assumptions.{"\n"}
        It can be used for several purposes, mainly regression, search and classification. The latter being specially useful for the problem that we had to solve. Also, as the data set’s size of the problem was not incredibly large, so the algorithm’s speed was not heavily impacted.{"\n"}
        {"\n"}
        We achieved a fairly good score around 70. But we believe that we could further improve our implementation by including cross validation to find the best “K” as with our current implementation it is found using a determined range. We also considered that cross validation would be better when working on a larger data set as this new feature would require us to take a piece of the data for training, for the cross validation.{"\n"}
        For further improvement, we found that we could use k-fold-cross-validation, a take of the algorithm that at first glance suppose an attractive improvement, but must be used carefully as the n pieces that the training data was divided into may cause the algorithm to have a bad time complexity the more n grows.{"\n"} 
        {"\n"}
        The team had fun implementing and getting deeper into this algorithm. We believe it will become a very useful tool that will accompany everyone that goes further into AI/Data Science.
        </Text>

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

      </View>
    </ScrollView>
    <NavegacionAbajo screen='Seleccion' />
    </>
  )
}