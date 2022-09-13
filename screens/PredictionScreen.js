import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput, RadioButton, Button } from 'react-native-paper'
import NavegacionAbajo from '../components/NavegacionAbajo'

export default function PredictionScreen() {

  const [state, setState] = useState({
    name: '',
    socialClass: '0', 
    gender: '',
    embarked: '',
    fare: 0
  })

  const predict = () => {
    console.log(state)
    if(!state.name) {
      alert('Please enter your name')
      return
    }
    if(!state.gender) {
      alert('Please select your gender')
      return 
    }
    if (!state.socialClass) {
      alert('Please select a class to travel on')
      return
    }
    if (!state.embarked) {
      alert('Please select your port')
      return
    }
    if (!state.fare) {
      alert('Please enter the cost of your ticket')
      return
    }
    // Aqui se va a mandar lo de state para predecir
    alert('Mueres')
    return
  }

  return (
    <>
    <View className='pt-5 h-full flex-1 bg-[#EEF1F7]'>
      <View className='items-center'>
        <Text className='text-xl font-bold mt-5'>Would you survive?</Text>
        <Text className='text-lg text-gray-700'>Enter your data and find out.</Text>
      </View>
      <ScrollView 
      className='w-screen pl-3 pr-2 mb-20'>
        <Text className='text-lg mb-2 mt-8 font-bold'>Your name</Text>
        <TextInput 
        value={state.name}
        onChangeText={name => setState({...state, name})}
        />
        <Text className='text-lg mb-2 mt-8 font-bold'>Your gender</Text>
        <RadioButton.Group
        value={state.gender}
        onValueChange={gender => setState({...state, gender})}>
            <RadioButton.Item label='Mujer' value='M' />
            <RadioButton.Item label='Hombre' value='H' />
        </RadioButton.Group>
        <Text className='text-lg mt-8 font-bold'>What class will you travel on?</Text>
        <View className='items-center relative'>
          <Picker
          className='items-center'
          selectedValue={state.socialClass}
          style={{ height: 30, width: 275 }}
          onValueChange={(socialClass) => setState({...state, socialClass})}>
            <Picker.Item label='Economy Class' value='1' />
            <Picker.Item label='Business Class' value='2' />
            <Picker.Item label='First Class' value='3' />
          </Picker>
        </View>
        <Text className='text-lg mt-44 font-bold'>On which port will you embark?</Text>
        <View className='items-center relative'>
          <Picker
          className='items-center'
          selectedValue={state.embarked}
          style={{ height: 30, width: 275 }}
          onValueChange={(embarked) => setState({...state, embarked})}>
            <Picker.Item label='Cherbourg' value='0' />
            <Picker.Item label='Queenstown' value='1' />
            <Picker.Item label='Southampton' value='2' />
          </Picker>
        </View>
        <Text className='text-lg mb-2 mt-44 font-bold'>How much did you pay for your ticket?</Text>
        <TextInput 
        value={state.fare}
        onChangeText={fare => setState({...state, fare})}
        keyboardType='number-pad'
        />
        <TouchableOpacity className='mt-10'>
          <Button onPress={predict}>Predict</Button>
        </TouchableOpacity>
      </ScrollView>

    </View>
    <NavegacionAbajo screen='Pred'/>
    </>
  )
}
