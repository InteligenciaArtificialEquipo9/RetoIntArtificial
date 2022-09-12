import { Text, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'
import {useNavigation} from "@react-navigation/native";


export default function Perfiles({img, nombre, matricula}) {


    return (
        <View
            className="bg-[#CED3DC] mr-3 shadow w-52"
        >
            <Image
                source={{
                    uri: img
                }}
                className='h-36 w-52 rounded-sm'/>
            <View className="px-3 pb-4 ">
                <Text className="font-bold text-base pt-2">{nombre}</Text>

                <View className="flex-row items-center space-x-1">
                    <Text className="overflow-hidden truncate text-sm text-[#5B616A]">{matricula}</Text>
                </View>
            </View>
        </View>
    )

}