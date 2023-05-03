/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './screens/welcome-screen/welcome-screen';
import MainScreen from './screens/main-screen/main-screen';
import systemColors from './assets/styles/system-colors';
import CreateExpenseScreen from './screens/create-expense-screen/create-expense-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from "@tracking/stores/auth-store";
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const {username} = AuthStore;

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={systemColors.statusBar.background}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: systemColors.screen.background},
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: true, title: username}}
        />
        <Stack.Screen
          name="CreateExpense"
          component={CreateExpenseScreen}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default observer(App);

// function useGetUsername() {
//   const [username, setUsername] = useState<string>('');

//   const getUsername = async () => {
//     await AsyncStorage.getItem('userFullName').then(username => {
//       setUsername(username || '');
//     });
//   };
//   useEffect(() => {
//     getUsername();
//   }, []);

//   return username;
// }
