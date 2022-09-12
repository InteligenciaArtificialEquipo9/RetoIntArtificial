import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput, RadioButton, Button } from 'react-native-paper'
import NavegacionAbajo from '../components/NavegacionAbajo'

export default function PredictionScreen() {

  const [result, setResult] = useState('')

  const [state, setState] = useState({
    name: '',
    age: 0,
    socialClass: '0', 
    gender: ''
  })

  const predict = () => {
    console.log(state)
    // Aqui se va a mandar lo de state para predecir
    setResult('Mueres')
  }

  return (
    <>
    <View className='pt-5 h-full flex-2 bg-[#EEF1F7]'>
      <View className='items-center'>
        <Text className='text-3xl font-bold mt-5'>¿Sobrebvivirías?</Text>
        <Text className='text-lg text-gray-700'>Ingresa tus datos y te daremos la respuesta</Text>
      </View>
      <ScrollView 
      className='w-screen pl-3 pr-2 mb-20'>
        <Text className='text-lg mb-2 mt-8 font-bold'>Nombre</Text>
        <TextInput 
        value={state.name}
        onChangeText={name => setState({...state, name})}
        />
        <Text className='text-lg mb-2 mt-8 font-bold'>Edad</Text>
        <TextInput 
        value={state.age}
        onChangeText={age => setState({...state, age})}
        keyboardType='number-pad'
        />
        <Text className='text-lg mb-2 mt-8 font-bold'>Genero</Text>
        <RadioButton.Group
        value={state.gender}
        onValueChange={gender => setState({...state, gender})}>
            <RadioButton.Item label='Mujer' value='M' />
            <RadioButton.Item label='Hombre' value='H' />
        </RadioButton.Group>
        <Text className='text-lg mt-8 font-bold'>Clase</Text>
        <View className='items-center relative'>
          <Picker
          className='items-center'
          selectedValue={state.socialClass}
          style={{ height: 50, width: 275 }}
          onValueChange={(socialClass) => setState({...state, socialClass})}>
            <Picker.Item label='Baja' value='0' />
            <Picker.Item label='Media baja' value='1' />
            <Picker.Item label='Media alta' value='2' />
            <Picker.Item label='Alta' value='3' />
          </Picker>
        </View>
        <TouchableOpacity className='mt-40'>
          <Button onPress={predict}>Predecir</Button>
        </TouchableOpacity>
        {result == '' ? '' :
          <View className='items-center'>
            <Text className='text-3xl mt-8 font-bold'>{result}</Text>
          </View>
        }
      </ScrollView>

    </View>
    <NavegacionAbajo screen='Pred'/>
    </>
  )
}
