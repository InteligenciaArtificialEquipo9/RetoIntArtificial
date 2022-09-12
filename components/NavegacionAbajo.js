import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {CalculatorIcon, ChartBarIcon, ChartPieIcon, ChatIcon,DocumentIcon, HomeIcon} from "react-native-heroicons/solid";

export default function NavegacionAbajo() {
    return (
        <View className="relative h-20 w-full">
             <View
               className=" absolute inset-x-0 bottom-0 bg-white h-16 flex flex-row self-center">

        <TouchableOpacity className="m-1.5 mt-2 basis-1/6 items-center">
                   <ChartPieIcon color= "#275DAD"
                                 size={30}/><Text>Alg1</Text>
                                 </TouchableOpacity>
        <TouchableOpacity className="m-1.5 mt-2 basis-1/6 items-center">
        <ChartBarIcon color= "#275DAD"
                      size={30}/>
        <Text className="text-xs">Alg2</Text></TouchableOpacity>
        <TouchableOpacity className="m-1.5 mt-2 basis-1/6 items-center">
                   <HomeIcon color= "#275DAD"
                             size={30}/><Text>Problem</Text></TouchableOpacity>
         <TouchableOpacity className="m-1.5 mt-2 basis-1/6 items-center"><DocumentIcon color= "#275DAD"
                                                                                             size={30}/><Text>Selección</Text></TouchableOpacity>
              <TouchableOpacity className="m-1.5 mt-2 basis-1/6 items-center">
                   <CalculatorIcon color= "#275DAD"
                                   size={30}/>
                   <Text className="text-xs">Pred</Text>
               </TouchableOpacity>
                             
        </View>
        </View>
    )
}

