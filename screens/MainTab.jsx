import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MyDocumentsScreen from './MyDocumentsScreen';
import BrowseScreen from './BrowseScreen';
import ChartScreen from './ChartScreen';
import MoreScreen from './MoreScreen';

const BottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="MyDocuments"
        component={MyDocumentsScreen}
        options={{
          title: '내 기록',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="grid-on"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          title: '탐색',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="search"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="Chart"
        component={ChartScreen}
        options={{
          title: '통계',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="bar-chart"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: '더 보기',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="keyboard-control"
              color={color}
              size={size}></MaterialIcons>
          ),
        }}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default MainTab;
