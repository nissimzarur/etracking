import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import systemColors from '@tracking/assets/styles/system-colors';
import {useNavigation} from '@react-navigation/native';
import Icon from '@tracking/assets/icons/plusIcon.svg';
import Styles from './main-screen.styles';
import HomeScreen from '../home-screen/home-screen';
import ProfileScreen from '../profile-screen/profile-screen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const nav = useNavigation();
  const PlusIcon = () => (
    <TouchableOpacity onPress={() => nav.navigate('CreateExpense')}>
      <Icon width={100} height={100} />
    </TouchableOpacity>
  );
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: Styles.tabBarStyle,
        tabBarLabelStyle: Styles.tabBarLabelStyle,
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="CreateExpenseButton"
        component={EmptyComponent}
        options={{
          tabBarLabelStyle: Styles.addTabBarLabelStyle,
          tabBarItemStyle: Styles.addTabBarItemStyle,
          tabBarIcon: PlusIcon,
          tabBarIconStyle: Styles.addTabBarIconStyle,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;

const EmptyComponent = (props: any) => {
  return <View />;
};
