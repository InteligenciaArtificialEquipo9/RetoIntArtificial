import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Screen_Alg1 from './screens/Screen_Alg1';
import Screen_Alg2 from './screens/Screen_Alg2';
import PredictionScreen from './screens/PredictionScreen';
import SelectionScreen from './screens/SelectionScreen';


const Slack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <TailwindProvider>
          <Slack.Navigator>
            
            <Slack.Screen name='Prediction' component={PredictionScreen} options={{headerShown: false}}/>
          </Slack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
  );
}