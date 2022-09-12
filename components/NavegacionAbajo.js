import {View, Text, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import {CalculatorIcon, ChartBarIcon, ChartPieIcon, ChatIcon,DocumentIcon, HomeIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

export default function NavegacionAbajo({screen}) {
  const navigation = useNavigation()

  const [target, setTarget] = useState('Home')

  const handleNavigate = (screen) => {
    setTarget(screen)
    navigation.navigate(screen)
  }

  return (
    <View className="relative h-30 w-full">
      <View
      className="absolute inset-x-0 bottom-0 bg-white h-16 flex flex-row self-center">
        <TouchableOpacity 
        className="m-1.5 mt-2 basis-1/6 items-center"
        onPress={() => handleNavigate('Alg1')}>
          <ChartPieIcon color= {screen == "Alg1" ? "#275DAD" : "#ABA9C3"}
          size={30}/>
          <Text>Alg1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className="m-1.5 mt-2 basis-1/6 items-center"
        onPress={() => handleNavigate('Alg2')}>
          <ChartBarIcon color= {screen == "Alg2" ? "#275DAD" : "#ABA9C3"}
          size={30}/>
          <Text className="text-xs">Alg2</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className="m-1.5 mt-2 basis-1/6 items-center"
        onPress={() => handleNavigate('Home')}>
          <HomeIcon color= {screen == "Problema" ? "#275DAD" : "#ABA9C3"}
          size={30}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className="m-1.5 mt-2 basis-1/6 items-center"
        onPress={() => handleNavigate('Selection')}>
          <DocumentIcon color= {screen == "Seleccion" ? "#275DAD" : "#ABA9C3"}
          size={30} />
          <Text>Selección</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        className="m-1.5 mt-2 basis-1/6 items-center"
        onPress={() => handleNavigate('Prediction')}>
          <CalculatorIcon color= {screen == "Pred" ? "#275DAD" : "#ABA9C3"}
          size={30} />
          <Text>Pred</Text>
        </TouchableOpacity>                 
      </View>
    </View>
  )
}
