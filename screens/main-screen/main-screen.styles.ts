import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBarStyle: {
    height: 87,
  },
  tabBarLabelStyle: {
    position: 'absolute',
    bottom: Platform.select({android: 30, ios: 0}),
    fontSize: 16,
  },
  addTabBarItemStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom:Platform.select({android: 80, ios: 50}),
    zIndex:1
  },
  addTabBarLabelStyle: {
    display: 'none',
  },
  addTabBarIconStyle:{
    display:'flex',
  }
});
