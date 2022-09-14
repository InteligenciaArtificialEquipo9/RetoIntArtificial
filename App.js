import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Screen_Alg1 from './screens/Screen_Alg1';
import Screen_Alg2 from './screens/Screen_Alg2';
import PredictionScreen from './screens/PredictionScreen';
import SelectionScreen from './screens/SelectionScreen';
import { DefaultTheme, Provider } from 'react-native-paper'

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#275DAD',
    secondary: '#FFFFFF'
  },
};

export default function App() {
  return (
      <NavigationContainer>
        <TailwindProvider>
          <Provider theme={theme}>
            <Stack.Navigator
            initialRouteName='Home'>
              <Stack.Screen name='Home' component={HomeScreen} options={{animation: 'none'}}/>
              <Stack.Screen name='Prediction' component={PredictionScreen} options={{animation: 'none', headerShown: false}}/>
              <Stack.Screen name='Alg1' component={Screen_Alg1} options={{animation: 'none', headerShown: false}}/>
              <Stack.Screen name='Alg2' component={Screen_Alg2} options={{animation: 'none', headerShown: false}}/>
              <Stack.Screen name='Selection' component={SelectionScreen} options={{animation: 'none', headerShown: false}}/>
            </Stack.Navigator>
          </Provider>
        </TailwindProvider>
      </NavigationContainer>
  );
}
