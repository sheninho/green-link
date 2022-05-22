import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native'
// connexion
import Connexion from './App/Connexion/Connexion/Connexion';
// inscription
import Inscription from './App/Connexion/Inscription/Inscription';
//accueil
import Accueil from './App/Accueil/Accueil';
//utiles
import Appbar from './Utiles/Appbar';


const Stack= createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name='Connexion' component={Connexion}/>
        <Stack.Screen name='Inscription' component={Inscription}/>
        <Stack.Screen name='Appbar' component={Appbar}/>
        <Stack.Screen name='Accueil' component={Accueil}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
