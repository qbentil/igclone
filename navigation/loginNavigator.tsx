// In App.js in a new project

import * as React from 'react';

import AppLoading from 'expo';
import Login from '../screens/Auth/Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from '../screens/Auth/Signup';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    
  });
  

  if(fontLoaded){
    return <AppLoading />
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Login" component = {Login} options = {{headerShown: true}} />
          <Stack.Screen  name = "Signup" component = {Signup} options = {{headerShown: true}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// export default App;