import {View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from "@react-navigation/native";
import Perfiles from "../components/Perfiles";
import {CalculatorIcon, ChartBarIcon, ChartPieIcon, ChatAlt2Icon, HomeIcon} from "react-native-heroicons/solid";
import NavegacionAbajo from "../components/NavegacionAbajo.js"

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (
        <>
        <SafeAreaView className='pt-5 h-full flex-1 bg-[#EEF1F7]'>
            <ScrollView>
            <View className="mb-20">
                <Text className="text-2xl text-center py-4 font-bold">Background</Text>
                <Image source={require("../assets/titanic.jpeg")}
                       className="rounded-lg w-10/12 h-56 self-center"/>
                <Text className="m-4 text-base">On April 10, 1912 the RMS Titanic left Southhampton, England headed for New York. Aboard were 2,435 passengers and 892 crew members. Five days later, the Titanic hit an iceberg in the frigid waters, within approximately two and a half hours the ship had split apart and sunk, leaving just over 700 survivors. But what if there was a way that we could analyze if a person's gender played a role in their survival or not. We’ll analyze the data set to explore the variables and determine whether the passenger survived or not. Furthermore, in the screen of “Prediction” you can enter your own data to see if you would have survived this disaster.
                {"\n"}
 Solving problems with algorithms of machine learning is important because it gives us valuable information about behaviors and patterns. The computer learns from past data to make predictions. For example, we could see that during the Titanic they followed the social norm of “Women and children first”.</Text>

            <Text className="text-xl text-center py-2 font-bold">Team members: </Text>

                <ScrollView
                    contentContainerStyle={{paddingHorizontal:15, paddingTop:10,}}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <Perfiles img="https://user-images.githubusercontent.com/48135979/189503284-0c1d2a3a-a76e-4da6-a6d8-5c7dc9e8b2b5.jpg" nombre={"Yusdivia Molina Román"} matricula={"A01653120"}/>
                    <Perfiles img="https://user-images.githubusercontent.com/48135979/189503430-396bb4c9-8435-46e3-b714-eff1c447e652.jpg" nombre={"Annya Paulina Verduzco Meza"} matricula={"A01650668"}/>
                    <Perfiles img="https://user-images.githubusercontent.com/48135979/189503299-89dee0e8-97db-4d1e-9aa5-9fd4a36ec6c4.jpeg" nombre={"Miguel A. Medina R."} matricula={"A01023656"}/>
                    <Perfiles img="https://user-images.githubusercontent.com/48135979/189503431-16689be3-c787-4820-90c8-c0eaa759a899.jpg" nombre={"Paola Fernández Gutiérrez Zamora"} matricula={"A01658087"}/>

                </ScrollView>

            </View>
            </ScrollView>
           
        </SafeAreaView>
        <NavegacionAbajo screen='Problema'/>
        </>
    )
}